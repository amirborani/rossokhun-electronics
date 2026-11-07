CREATE TABLE IF NOT EXISTS public.moddee_chat_rate_limits (
  identity_hash text PRIMARY KEY CHECK (identity_hash ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz NOT NULL,
  request_count integer NOT NULL CHECK (request_count > 0)
);

ALTER TABLE public.moddee_chat_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.moddee_chat_rate_limits FROM PUBLIC, anon, authenticated;

CREATE OR REPLACE FUNCTION public.consume_moddee_chat_rate_limit(
  p_identity_hash text,
  p_limit integer,
  p_window_seconds integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
  v_request_count integer;
BEGIN
  IF auth.role() IS DISTINCT FROM 'service_role' THEN
    RAISE EXCEPTION 'service role required';
  END IF;

  IF p_identity_hash IS NULL OR p_identity_hash !~ '^[0-9a-f]{64}$' THEN
    RAISE EXCEPTION 'invalid identity hash';
  END IF;
  IF p_limit IS NULL OR p_limit < 1 OR p_limit > 100
     OR p_window_seconds IS NULL OR p_window_seconds < 1 OR p_window_seconds > 86400 THEN
    RAISE EXCEPTION 'invalid rate limit';
  END IF;

  DELETE FROM public.moddee_chat_rate_limits
  WHERE window_started_at < pg_catalog.now() - INTERVAL '24 hours';

  INSERT INTO public.moddee_chat_rate_limits AS current_limit (
    identity_hash,
    window_started_at,
    request_count
  )
  VALUES (p_identity_hash, pg_catalog.now(), 1)
  ON CONFLICT (identity_hash) DO UPDATE SET
    window_started_at = CASE
      WHEN current_limit.window_started_at <= pg_catalog.now() - pg_catalog.make_interval(secs => p_window_seconds)
      THEN pg_catalog.now()
      ELSE current_limit.window_started_at
    END,
    request_count = CASE
      WHEN current_limit.window_started_at <= pg_catalog.now() - pg_catalog.make_interval(secs => p_window_seconds)
      THEN 1
      ELSE current_limit.request_count + 1
    END
  RETURNING request_count INTO v_request_count;

  RETURN v_request_count <= p_limit;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_moddee_chat_rate_limit(text, integer, integer) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_moddee_chat_rate_limit(text, integer, integer) TO service_role;

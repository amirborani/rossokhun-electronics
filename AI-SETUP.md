# Moddee Shop AI assistant setup

The storefront chat calls the `moddee-chat` Supabase Edge Function. The OpenAI API key stays on the server and is never added to browser code.

## 1. Prepare Supabase

In the Supabase SQL Editor for the shop's project, run `supabase/chat-schema.sql`. This creates a private rate-limit table and a function that only the Supabase service role can execute. It stores short-lived HMACs of visitor IP addresses and request counts; it does not store chat messages.

Deploy the function from the project folder:

```powershell
supabase link --project-ref YOUR_PROJECT_REF
supabase functions deploy moddee-chat
```

`supabase/config.toml` disables the gateway's JWT check for this public, browser-callable function. The function itself validates the browser origin, message format, size, and rate limit.

## 2. Add server secrets

Set these in the Supabase project. Use the exact site origins (scheme and port included) for `ALLOWED_ORIGINS`; separate multiple origins with commas. Include the development origin only while you need it.

```powershell
supabase secrets set OPENAI_API_KEY=YOUR_OPENAI_API_KEY ALLOWED_ORIGINS=https://your-shop-domain.example IP_HASH_SECRET=YOUR_RANDOM_SECRET
```

Generate a unique, long random value for `IP_HASH_SECRET`; do not reuse the OpenAI API key. Supabase provides `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to Edge Functions. Do not place the service-role key or OpenAI key in any `VITE_*` setting.

The function defaults to `gpt-4.1-mini`. To choose another model available to the shop's OpenAI account, set `OPENAI_MODEL` as an Edge Function secret.

## 3. Configure the storefront

Create a local `.env.local` file (it is ignored by Git) with the project's URL and publishable key:

```dotenv
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

Restart the Vite server after changing environment variables, then rebuild and deploy the storefront over HTTPS. The publishable key is intended for browser use; the service-role key is not.

## Privacy and limits

Visitors are limited to 10 questions per 10 minutes per IP. The rate-limit database retains only a keyed hash and deletes entries older than 24 hours when new requests arrive. Chat messages are sent to OpenAI to produce a response, with response storage disabled in the API request; the shop's OpenAI account data-handling settings still apply. The site does not save chat transcripts. The widget warns visitors not to enter payment details, passwords, or private addresses.

If frontend credentials are missing, or the function reports missing configuration, the widget links visitors to WhatsApp. Temporary server/network failures also offer WhatsApp alongside retry. Live AI responses require the shop owner to configure the Supabase project and OpenAI key.

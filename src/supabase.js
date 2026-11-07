import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const projectUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

let validProjectUrl = false;
try {
  const parsedUrl = new URL(projectUrl ?? "");
  validProjectUrl = parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:";
} catch {
  validProjectUrl = false;
}

export const isSupabaseConfigured = Boolean(validProjectUrl && publishableKey);
export const supabase = isSupabaseConfigured
  ? createSupabaseClient(projectUrl, publishableKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export function getSetupMessage() {
  return "Supabase is not configured. Copy .env.example to .env.local, check the project URL and publishable key, then restart the dev server.";
}

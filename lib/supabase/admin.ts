import { createClient } from "@supabase/supabase-js";

/**
 * Admin Supabase client menggunakan Service Role key.
 * HANYA untuk server-side: Server Actions dan Route Handlers.
 * JANGAN gunakan di Client Components atau expose ke browser.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}


// packages
import { createBrowserClient } from "@supabase/ssr";

// ts
import { Database } from "@/lib/types/supabase";

export function supabaseBrowser() {
    return createBrowserClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
}
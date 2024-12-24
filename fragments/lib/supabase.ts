import { createClient } from "@supabase/supabase-js";



export const supabase = process.env.NEXT_PUBLIC_ENABLE_SUPABASE ? createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string ,
    process.env.NEXT_PUBLIC_SUPABASE_KEY as string
) : undefined



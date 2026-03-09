import { createClient } from '@supabase/supabase-js';

// Fallbacks are required so that `next build` static export doesn't crash 
// when these environment variables are missing on the build server.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

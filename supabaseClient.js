// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://###.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';

export const supabase = createClient(supabaseUrl, supabaseKey);

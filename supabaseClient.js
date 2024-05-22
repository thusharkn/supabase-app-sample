// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pmzvrxoesudpnmnkoqpa.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtenZyeG9lc3VkcG5tbmtvcXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzNTc4NzEsImV4cCI6MjAzMTkzMzg3MX0.sw2raeVWT4D90c5V-JXmLNiuKS3F7sngOjql2TQ_jic';

export const supabase = createClient(supabaseUrl, supabaseKey);
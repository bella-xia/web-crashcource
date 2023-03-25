import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bvgnqpunqnwwczcziriz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2Z25xcHVucW53d2N6Y3ppcml6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyNjA0NjAsImV4cCI6MTk5NDgzNjQ2MH0.P1w56MMrF_hSVThaPA6Yut13MJ1gDVbZ5dGe0pLzbPc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

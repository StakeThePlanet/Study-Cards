import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://qtsqyllzyymnjglogqgn.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0c3F5bGx6eXltbmpnbG9ncWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwMjAxNDIsImV4cCI6MjAxNTU5NjE0Mn0.U3Y2JkGSdO7bAdETmT4YybHhSgo-xIzB5NMtT3d2WWU")
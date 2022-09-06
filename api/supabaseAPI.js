import { supabase } from "./supabaseClient";

export const supabaseAPI = {
  // returns { data }
  getPost: async (id) => await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .limit(1)
    .single(),
  getPosts: async () => await supabase
    .from('posts')
    .select('id, title, created_at')
    .order('id', { ascending: true }),
}
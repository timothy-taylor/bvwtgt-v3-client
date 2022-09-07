import { supabase } from "./supabaseClient";

export const supabaseAPI = {
  getPost: async (id) =>
    await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .limit(1)
      .single(),

  getPosts: async () =>
    await supabase
      .from("posts")
      .select("id, title")
      .order("id", { ascending: false }),

  getIds: async (quantity) =>
    await supabase
      .from("posts")
      .select("id")
      .order("id", { ascending: false })
      .limit(quantity),
};

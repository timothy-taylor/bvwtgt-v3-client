import { useEffect, useState } from "react";
import { supabaseAPI } from "../api/supabaseAPI";

export const usePosts = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const { data: posts } = await supabaseAPI.getPosts();
      setLoadedPosts(posts.reverse());
    }

    loadPosts()
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [])

  return { loading, posts: loadedPosts, error };
};
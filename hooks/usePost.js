import { useEffect, useState } from "react";
import { supabaseAPI } from "../backend/supabaseAPI";

export const usePost = (id) => {
  const [loadedPost, setLoadedPost] = useState([]);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const loadPost = async (id) => {
      const { data: post } = await supabaseAPI.getPost(id);
      if(!ignore) setLoadedPost(post);
    }

    loadPost(id)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => {
      ignore = true
    };
  }, [id])

  return { loading, post: loadedPost, error };
};
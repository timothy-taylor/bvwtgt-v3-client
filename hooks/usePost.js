import { useEffect, useState } from "react";
import { supabaseAPI } from "../api/supabaseAPI";

export const usePost = (id) => {
  const [loadedPost, setLoadedPost] = useState([]);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async (id) => {
      const { data: post } = await supabaseAPI.getPost(id);
      setLoadedPost(post);
    }

    loadPost(id)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id])

  return { loading, post: loadedPost, error };
};
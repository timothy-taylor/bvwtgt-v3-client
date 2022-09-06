import { usePosts } from "../hooks/usePosts";
import Link from "next/link";

export default function Home() {
  const { loading, posts, error } = usePosts();

  const displayPosts = posts.map((e) => (
    <Link key={e.created_at} href={`/post/${e.id}`}>
      <a className="block text-lg pb-2">
        {e.title}
      </a>
    </Link>
  ));

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {displayPosts}
    </>
  )
}
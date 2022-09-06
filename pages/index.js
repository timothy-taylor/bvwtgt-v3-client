import Link from "next/link";
import { supabaseAPI } from "../api/supabaseAPI";

export default function Home({ posts }) {
  const displayPosts = posts.map((e) => (
    <Link key={e.created_at} href={`/post/${e.id}`}>
      <a className="block text-lg pb-2">
        {e.title}
      </a>
    </Link>
  ));

  return (
    <>
      {displayPosts}
    </>
  )
}

export async function getStaticProps() {
  const { data: posts } = await supabaseAPI.getPosts();

  return {
    props: {
      posts,
    },
  }
}
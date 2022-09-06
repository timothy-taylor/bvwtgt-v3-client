import Link from "next/link";
import Head from "next/head";
import { supabaseAPI } from "../backend/supabaseAPI";

export default function Home({ posts }) {
  const displayPosts = posts.map((e) => (
    <li key={e.created_at}>
      <Link href={`/post/${e.id}`}>
        <a className="block text-lg pb-2">
          {e.title}
        </a>
      </Link>
    </li>
  ));

  return (
    <>
      <Head>
        <title>bvwtgt</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className="list-none">
        {displayPosts}
      </ul>
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
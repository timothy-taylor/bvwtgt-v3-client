import Link from "next/link";
import Head from "next/head";
import { supabaseAPI } from "../backend/supabaseAPI";
import Header from "../components/Header";

export default function Home({ posts }) {
  const displayPosts = posts.map((e) => (
    <li key={e.id} className="p-0 -indent-4 pl-4 pb-3 max-w-sm">
      <Link href={`/post/${e.id}`}>
        <a className="block text-lg">
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
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header
        h2="Hi and welcome."
        h3="This site houses writings and projects of Tim Taylor as he explores technology, sound, process, and design."
      />
      <h4 className="pt-8 pb-2">Posts:</h4>
      <ul className="list-none m-0">
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
    revalidate: 86400,
  }
}
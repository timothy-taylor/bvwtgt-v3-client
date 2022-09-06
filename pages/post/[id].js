import Link from "next/link";
import { useRouter } from "next/router";
import { marked } from "marked";
import { DisplayMarkdownAsArticle } from "../../components/DisplayMarkdownAsArticle";
import { supabaseAPI } from "../../backend/supabaseAPI";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) return (<div>Loading...</div>)
  return (
    <div className="min-h-screen">
      <DisplayMarkdownAsArticle
        title={post.title}
        date={post.created_at}
        markdown={marked.parse(post.content)}
      />
      <div className="pb-4 text-center">
        <Link href="/">
          <a className="lowercase font-thin italic">Back</a>
        </Link>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  //
  // currently creating static paths for 
  // the ids for the 10 most recent posts
  const { data } = await supabaseAPI.getIds();

  //
  // the id comes as a number from supabase,
  // but getStaticPaths() needs to return it as a string
  const paths = data.map(({ id }) => ({
    params: {
      id: `${id}`,
    },
  }));

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const { data: post } = await supabaseAPI.getPost(params.id);

  return {
    props: {
      post
    }
  }
}

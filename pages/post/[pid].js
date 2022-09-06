import Link from "next/link";
import { useRouter } from "next/router";
import { marked } from "marked";
import { usePost } from "../../hooks/usePost";
import { DisplayMarkdownAsArticle } from "../../components/DisplayMarkdownAsArticle";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  const { loading, post, error } = usePost(pid);

  return (
    <div className="min-h-screen">
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {!loading && <DisplayMarkdownAsArticle
        title={post.title}
        date={post.created_at}
        markdown={marked.parse(post.content)}
      />}
      <div className="pb-4 text-center">
        <Link href="/">
          <a className="lowercase font-thin italic">Back</a>
        </Link>
      </div>
    </div>
  )
}
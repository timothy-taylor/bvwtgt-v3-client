import { useId, useEffect} from "react";
import sanitizeHtml from "sanitize-html";

export const DisplayMarkdownAsArticle = ({ title, date, markdown }) => {
  const id = useId();

  useEffect(() => {
    const p = document.getElementById(id);
    p.innerHTML = sanitizeHtml(markdown)
  }, [markdown, id]);

  return (
    <article className="pb-12">
      <h2 className="max-w-sm font-bold">{title}</h2>
      <div className="text-sm italic">{date}</div>
      <div className="pt-6" id={id} />
    </article>
  )
}
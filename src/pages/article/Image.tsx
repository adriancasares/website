import ArticleMeta from "../../lib/types/ArticleMeta";
import { useArticle } from "./ArticleContext";

export default function Image(props: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  const article: ArticleMeta = useArticle();

  return (
    <div className="flex flex-col gap-2">
      <img
        src={`/assets/images/${article.id}/${props.src}`}
        alt={props.alt}
        className={`${props.className} object-contain`}
      />
      {props.caption && <p className="text-xs">{props.caption}</p>}
    </div>
  );
}

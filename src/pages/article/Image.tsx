import ArticleMeta from "../../lib/types/ArticleMeta";
import { useArticle } from "./ArticleContext";

export default function Image(props: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  border?: boolean;
}) {
  const article: ArticleMeta = useArticle();

  return (
    <div className="flex flex-col gap-2">
      <div
        className={
          props.border ? "border-2 border-primary-light-weak p-10" : ""
        }
      >
        <img
          src={`/assets/images/${article.id}/${props.src}`}
          alt={props.alt}
          className={`${props.className} object-contain`}
        />
      </div>
      {props.caption && <p className="text-xs">{props.caption}</p>}
    </div>
  );
}

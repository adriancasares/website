import ArticleMeta from "../../lib/types/ArticleMeta";
import ArticlePreview from "./ArticlePreview";
// @ts-ignore
import * as data from "../../../public/blog.json";
import { lazy } from "solid-js";

export default function ArticleList() {
  // @ts-ignore
  const articles: ArticleMeta[] = Object.keys(data.default).map((id) => {
    return {
      // @ts-ignore
      ...data.default[id],
      id,
    };
  });

  return (
    <div className="bg-primary-off-color sm:px-20 px-10">
      <div className="max-w-2xl mx-auto py-16 flex flex-col gap-8">
        <h1>Blog</h1>
        <div className="flex flex-col gap-4">
          {articles
            .sort((a, b) => {
              return a.date < b.date ? 1 : -1;
            })
            .map((article) => {
              return <ArticlePreview article={article} />;
            })}
        </div>
      </div>
    </div>
  );
}

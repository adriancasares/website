import ArticleMeta from "../../lib/types/ArticleMeta";
// @ts-ignore
import * as data from "../../../public/blog.json";
import { ErrorBoundary, JSX } from "solid-js";
import { FiArrowLeft, FiX } from "solid-icons/fi";
import { Link } from "solid-app-router";

export default function ArticleWrapper(props: {
  id: string;
  children?: JSX.Element;
}) {
  const article: ArticleMeta = data.default[props.id];

  return (
    <div className="py-8 animate-fade-in">
      {/* @ts-ignore */}
      <ErrorBoundary
        fallback={(e) => {
          console.error(e);
          return <div>An Error Occured</div>;
        }}
      >
        <div className="max-w-4xl mx-auto lg:mt-16 px-8 flex flex-col gap-2">
          <div className="lg:fixed top-10 left-10 flex justify-center mb-5">
            <Link href="/?from=post">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex justify-center items-center hover:bg-slate-200 transition-colors cursor-pointer mx-auto">
                <FiArrowLeft className="absolute text-xl text-primary-light opacity-0 scale-x-0 lg:opacity-100 lg:transition-all lg:scale-x-100  lg:duration-300 transition-transform origin-right" />
                <FiX className="absolute text-xl text-primary-light lg:opacity-0 scale-100 lg:scale-0 transition-transform duration-300" />
              </div>
            </Link>
          </div>
          <h2 className="max-w-lg">{article.title}</h2>

          <div className="flex flex-col">
            <p>By Adrian Casares</p>
            <p>
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year:
                  new Date().getFullYear() ===
                  new Date(article.date).getFullYear()
                    ? undefined
                    : "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-8 py-8">
          <hr />
        </div>
        {props.children}
      </ErrorBoundary>
    </div>
  );
}

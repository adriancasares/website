import PageWrapper from "../../components/core/PageWrapper";

import { useParams, useNavigate } from "solid-app-router";
import { ErrorBoundary, lazy } from "solid-js";

// @ts-ignore
import * as data from "../../../public/blog.json";
import ArticleMeta from "../../lib/types/ArticleMeta";
import TextBlock from "./TextBlock";

export default function Article() {
  const params = useParams();
  const navigate = useNavigate();
  const Article = lazy(() => import(`./posts/${params.id}.tsx`));

  const article: ArticleMeta = data.default[params.id];
  document.querySelector(
    "title"
  ).innerText = `${article.title} - Adrian Casares`;

  return (
    <PageWrapper>
      {/* @ts-ignore */}
      <ErrorBoundary
        fallback={(e) => {
          navigate("/?from=404");
          return <div>Error finding this article</div>;
        }}
      >
        <Article />
      </ErrorBoundary>
    </PageWrapper>
  );
}

import PageWrapper from "../../components/core/PageWrapper";

import { useParams, useNavigate } from "solid-app-router";
import { ErrorBoundary, lazy } from "solid-js";

export default function Article() {
  const params = useParams();
  const navigate = useNavigate();
  const Article = lazy(() => import(`./posts/${params.id}.tsx`));

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

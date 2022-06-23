import PageWrapper from "../../components/core/PageWrapper";
import ArticleList from "./ArticleList";
import Bio from "./Bio";

export default function Home() {
  return (
    <PageWrapper classNameAppend="">
      <Bio />
      <ArticleList />
    </PageWrapper>
  );
}

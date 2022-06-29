import PageWrapper from "../../components/core/PageWrapper";
import {
  TransitionProvider,
  useTransition,
} from "../../lib/context/transition";
import ArticleList from "./ArticleList";
import Bio from "./Bio";

function HomeInner() {
  const [fadePage, setFadePage] = useTransition();

  document.querySelector("title").innerText = "Home - Adrian Casares";

  return (
    <PageWrapper classNameAppend="">
      <div
        className={`transition-opacity duration-500 ${
          fadePage() ? "opacity-0" : "opacity-100"
        }`}
      >
        <Bio />
        <ArticleList />
      </div>
    </PageWrapper>
  );
}
export default function Home() {
  return (
    <TransitionProvider>
      <HomeInner />
    </TransitionProvider>
  );
}

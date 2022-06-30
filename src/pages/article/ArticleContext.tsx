import { createSignal, createContext, useContext, JSX } from "solid-js";
import ArticleMeta from "../../lib/types/ArticleMeta";

const ArticleContext = createContext<ArticleMeta>();

export function ArticleContextProvider(props: {
  article: ArticleMeta;
  children?: JSX.Element;
}) {
  return (
    // @ts-ignore
    <ArticleContext.Provider value={props.article}>
      {props.children}
    </ArticleContext.Provider>
  );
}

export function useArticle(): ArticleMeta {
  return useContext(ArticleContext);
}

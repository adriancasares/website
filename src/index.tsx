import { render } from "solid-js/web";
import "highlight.js/styles/github.css";
import "./global.css";
import { Router, Routes, Route } from "solid-app-router";
import Home from "./pages/home/Home";
import Article from "./pages/article/Article";
import seed from "seed-random";

const Index: Function = () => {
  const themeMax = 3;

  const today = new Date();

  const useSeed = true;

  const seeded = seed(
    useSeed
      ? `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`
      : Math.random()
  );

  const theme = Math.floor(seeded() * themeMax) + 1;

  document.body.classList.add(`theme-${theme}`);

  return (
    <>
      {/* @ts-ignore */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Article />} />
      </Routes>
    </>
  );
};

render(() => <Router children={<Index />} />, document.querySelector("#root")!);

import { render } from "solid-js/web";
import "./global.css";
import { Router, Routes, Route } from "solid-app-router";
import Home from "./pages/home/Home";
import Article from "./pages/article/Article";

const Index: Function = () => {
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

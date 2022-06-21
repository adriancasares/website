import { render } from "solid-js/web";
import "./global.css";
import { Router, Routes, Route } from "solid-app-router";

const Index: Function = () => {
  return (
    <>
      {/* @ts-ignore */}
      <Routes>
        <Route path="/" element={<h1>hello</h1>} />
      </Routes>
    </>
  );
};

render(() => <Router children={<Index />} />, document.querySelector("#root")!);

import { FiArrowRight, FiClock } from "solid-icons/fi";
import { createEffect, createSignal } from "solid-js";
import { useNavigate } from "solid-app-router";
import ArticleMeta from "../../lib/types/ArticleMeta";
import { useTransition } from "../../lib/context/transition";

export default function ArticlePreview(props: { article: ArticleMeta }) {
  const [fadePage, setFadePage] = useTransition();

  const [expanding, setExpanding] = createSignal(false);

  createEffect(() => {
    setFadePage(expanding());
  });

  const screenHeight = window.innerHeight;

  const screenWidth = window.innerWidth;

  let div;

  const navigate = useNavigate();

  return (
    <a
      ref={div}
      className={`unstyled relative z-10 max-w-2xl mx-auto border-r-4 border-primary-accent py-6 px-8 gap-2 flex flex-col group cursor-pointer transition-all duration-500 scale-100 ${
        expanding() ? "border-r-0 z-20" : ""
      }`}
      href={`/blog/${props.article.id}`}
      onClick={(e) => {
        e.preventDefault();

        setExpanding(!expanding());

        setTimeout(() => {
          navigate(`/blog/${props.article.id}`);
        }, 500);
      }}
    >
      <div
        className={`transition-opacity duration-200 z-10 flex flex-col gap-2 ${
          expanding() ? "opacity-0" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-2">
          <h5>{props.article.title}</h5>
          <div className="text-primary-light transition-all scale-x-0 group-hover:scale-x-100 duration-200 origin-left">
            <FiArrowRight className="hidden group-hover:block" />
          </div>
        </div>
        <p>{props.article.excerpt}</p>
      </div>
      <div
        className="bg-white w-full h-full scale-100 absolute top-0 left-0 transition-all duration-1000 ease-in"
        style={{
          "--tw-scale-x": expanding()
            ? (screenWidth / div.getBoundingClientRect().width) * 2
            : undefined,
          "--tw-scale-y": expanding()
            ? (screenHeight / div.getBoundingClientRect().height) * 2
            : undefined,
          "--tw-translate-x": expanding()
            ? `${
                screenWidth / 2 -
                (div.getBoundingClientRect().left +
                  div.getBoundingClientRect().width / 2)
              }px`
            : undefined,
          "--tw-translate-y": expanding()
            ? `${
                screenHeight / 2 -
                (div.getBoundingClientRect().top +
                  div.getBoundingClientRect().height / 2)
              }px`
            : undefined,
        }}
      />
    </a>
  );
}

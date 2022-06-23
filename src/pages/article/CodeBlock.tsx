import highlight from "highlight.js";
import { createEffect } from "solid-js";
export default function CodeBlock(props: {
  caption?: string;
  codingLanguage: string;
  code: string;
}) {
  let codeRef;

  createEffect(() => {
    if (codeRef) {
      codeRef.innerHTML = highlight.highlight(
        props.codingLanguage,
        props.code
      ).value;
    }
  });

  return (
    <div className="flex flex-col gap-2">
      <pre className="bg-slate-100 p-4 overflow-hidden whitespace-pre-wrap">
        <code ref={codeRef}>{props.code}</code>
      </pre>
      {props.caption && <p className="text-xs">{props.caption}</p>}
    </div>
  );
}

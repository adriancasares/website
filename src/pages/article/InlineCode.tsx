import { JSX } from "solid-js";

export default function InlineCode(props: { children?: JSX.Element }) {
  return (
    <span className="bg-slate-100 text-slate-600 py-1 px-2 rounded-sm font-mono border border-slate-200">
      {props.children}
    </span>
  );
}

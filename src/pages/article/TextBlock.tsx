import { JSX } from "solid-js";

export default function TextBlock(props: { children?: JSX.Element }) {
  return (
    <div className="max-w-4xl px-8 flex flex-col gap-8 mx-auto">
      {props.children}
    </div>
  );
}

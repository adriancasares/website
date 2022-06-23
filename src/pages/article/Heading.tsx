import { JSX } from "solid-js";

export default function Heading(props: { children?: JSX.Element; id: string }) {
  return (
    <p className="font-serif text-2xl mb-4 text-primary-light-strong">
      {props.children}
    </p>
  );
}

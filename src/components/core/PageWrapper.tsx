import { children, JSX } from "solid-js";

export default function PageWrapper(props: {
  children?: JSX.Element;
  classNameAppend?: string;
}) {
  return (
    <div
      className={`relative w-full h-full top-0 bottom-0 left-0 right-0 ${props.classNameAppend}`}
    >
      {props.children}
    </div>
  );
}

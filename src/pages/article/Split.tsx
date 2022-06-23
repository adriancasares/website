import { JSX } from "solid-js";

export default function Split(props: {
  left: JSX.Element;
  right: JSX.Element;
  leftWidth: string;
  rightWidth: string;
}) {
  return (
    <div className="flex relative gap-8">
      {/* 50-50 split between left and right */}
      <div className={`flex-none ${props.leftWidth}`}>{props.left}</div>
      <div className={`flex-none ${props.rightWidth}`}>{props.right}</div>
    </div>
  );
}

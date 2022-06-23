import { JSX } from "solid-js";
import { Link } from "solid-app-router";

export default function SocialLink(props: {
  name: string;
  url: string;
  children?: JSX.Element;
}) {
  return (
    <Link href={props.url}>
      <div className="hover:bg-slate-100 rounded-md py-1 px-2 transition">
        <div className="flex flex-row items-center gap-2">
          <div className="text-primary-light-medium text-lg">
            {props.children}
          </div>
          <div className="w-1 h-1 bg-primary-light rounded-full"></div>
          <p>{props.name}</p>
        </div>
      </div>
    </Link>
  );
}

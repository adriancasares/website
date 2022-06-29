import { createSignal, JSX, Show } from "solid-js";
import { Link } from "solid-app-router";
import { FiMail } from "solid-icons/fi";
import copy from "clipboard-copy";

export default function EmailMe(props: { children?: string }) {
  const [copied, setCopied] = createSignal(0);
  return (
    <div
      className="hover:bg-slate-100 rounded-md py-1 px-2 transition relative group cursor-pointer"
      onClick={() => {
        copy(props.children);

        const copyState = copied() + 1;

        setCopied(copyState);

        setTimeout(() => {
          if (copied() === copyState) {
            setCopied(0);
          }
        }, 1000);
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="text-primary-light-medium text-lg">
          <FiMail />
        </div>
        <div className="w-1 h-1 bg-primary-light rounded-full"></div>
        <p>email me</p>
      </div>
      <div className="absolute whitespace-nowrap top-0 -translate-y-full left-1/2 -translate-x-1/2 rounded-md py-2 px-4 justify-center items-center hidden group-hover:flex">
        <div className="absolute bg-slate-600/90 w-full h-full top-0 rounded-md" />
        <p className="relative text-white">
          {/* @ts-ignore */}
          <Show when={copied() === 0}>
            <>
              <span className="flex">
                <span className="font-mono whitespace-pre text-gray-300">
                  contact:{" "}
                </span>
                <span className="">{props.children}</span>
              </span>

              <p className="font-mono">click to copy</p>
            </>
          </Show>

          {/* @ts-ignore */}
          <Show when={copied() !== 0}>
            <>
              <span className="font-mono whitespace-pre text-green-300 animate-fade-in-right">
                copied to clipboard
              </span>
            </>
          </Show>
        </p>
      </div>
    </div>
  );
}

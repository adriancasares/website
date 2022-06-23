export default function Image(props: {
  src: string;
  alt: string;
  className?: string;
  postId: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={`/assets/images/${props.postId}/${props.src}`}
        alt={props.alt}
        className={`${props.className} object-contain`}
      />
      {props.caption && <p className="text-xs">{props.caption}</p>}
    </div>
  );
}

export default function Image(props: {
  src: string;
  alt: string;
  className?: string;
  postId: string;
}) {
  return (
    <img
      src={`/assets/images/${props.postId}/${props.src}`}
      alt={props.alt}
      className={`${props.className}`}
    />
  );
}

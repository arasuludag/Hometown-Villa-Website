export default function AirBNBCard(props: { href: string }) {
  return (
    <div
      data-id={props.href.split("/").at(-1)}
      className="airbnb-embed-frame"
      data-view="home"
      style={{
        maxWidth: "435px",
        width: "100%",
        overflow: "hidden",
        margin: "0px 0px",
      }}
    ></div>
  );
}

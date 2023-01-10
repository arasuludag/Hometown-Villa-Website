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
        margin: "0px 0px 50px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    ></div>
  );
}

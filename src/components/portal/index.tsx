import React, { CSSProperties } from "react";
import "./index.css";

type PortalProps = {
  color: "orange" | "magenta" | "red" | "black";
  children?: JSX.Element | React.ReactNode;
  style?: CSSProperties;
  imageSrc?: string;
  imageFirst?: boolean;
  title?: string;
  slogan?: string;
  description?: string | JSX.Element;
  imageStyle?: CSSProperties;
  noImageStyle?: boolean;
  textMargin?: string;
  textExtra?: JSX.Element | React.ReactNode;
};

const PortalImage = (props: PortalProps) => (
  <img
    src={props.imageSrc}
    style={
      props.noImageStyle
        ? props.imageStyle
        : {
            filter: "drop-shadow(0 0 1rem #2a2a2a)",
            maxWidth: "100%",
            minWidth: "min(400px, 100%)",
            flex: "2 1",
            ...props.imageStyle,
          }
    }
  />
);

const TextOnly = (props: PortalProps) => (
  <div style={{ color: "black", fontSize: "18px" }}>
    {props.title && (
      <div style={{ fontSize: "28px", fontWeight: 650 }}>{props.title}</div>
    )}
    {props.slogan && (
      <div style={{ fontSize: "36px", fontWeight: 600 }}>{props.slogan}</div>
    )}
    {props.description && (
      <div style={{ fontSize: "22px", fontWeight: 550 }}>
        {props.description}
      </div>
    )}
    {props.textExtra}
  </div>
);

const WithImage = (props: PortalProps) => (
  <div style={{ color: "black", fontSize: "18px" }}>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        color: "rgba(255, 255, 255, 0.95)",
      }}
    >
      {props.imageFirst && <PortalImage {...props} />}
      <div style={{ flex: "1 1", margin: props.textMargin ?? "5vw" }}>
        <div
          style={{
            fontSize: "28px",
            fontWeight: 650,
            color: "rgba(255, 255, 255, 0.7)",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.95)",
            marginTop: "4px",
          }}
        >
          {props.slogan}
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: 550,
            marginTop: "16px",
          }}
        >
          {props.description}
        </div>
      </div>
      {!props.imageFirst && <PortalImage {...props} />}
    </div>
  </div>
);

const Portal = (props: PortalProps) => {
  return (
    <div
      className={`portal-${props.color}`}
      style={{
        borderRadius: "10px",
        padding: "48px",
        margin: "18px",
        ...props.style,
      }}
    >
      {props.imageSrc ? <WithImage {...props} /> : <TextOnly {...props} />}
    </div>
  );
};

export default Portal;

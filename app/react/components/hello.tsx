"use client";

import React, { JSX } from "react";
import { JSONComponent } from "jbricks";

function renderReactComponent(json: JSONComponent): JSX.Element {
  const { type, props = {}, children = [] } = json;

  return React.createElement(
    type,
    {
      ...props,
      key: props.key || undefined, // Asegura que cada elemento tenga una clave única
    },
    Array.isArray(children)
      ? children.map((child, index) =>
          typeof child === "string"
            ? child
            : renderReactComponent({
                ...child,
                props: { ...child.props, key: child.props?.key || index }, // Agrega la clave única
              })
        )
      : null
  );
}

const json: JSONComponent = {
  type: "div",
  props: {
    className: "test",
    style: {
      padding: "20px",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ddd",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
    },
  },
  children: [
    {
      type: "h1",
      props: {
        className: "title",
        style: { fontSize: "24px", color: "#333" },
      },
      children: ["Hello, React!"],
    },
    {
      type: "p",
      props: {
        style: { fontSize: "16px", color: "#666" },
      },
      children: ["This is a paragraph."],
    },
    {
      type: "button",
      props: {
        style: {
          padding: "10px",
          backgroundColor: "#00796b",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        },
        onClick: () => {
          console.log("Hello, World!");
          alert("Hello, World!");
        },
      },
      children: ["Click me!"],
    },
  ],
};

export default function ReactPage() {
  return renderReactComponent(json);
}

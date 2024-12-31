"use client";

import React, { JSX } from "react";
import { JSONComponent } from "jbricks";

function renderReactComponent(json: JSONComponent): JSX.Element {
  const { type, props = {}, children = [] } = json;

  return React.createElement(
    type,
    {
      ...props, // Pasa todas las props como atributos del elemento
      key: props.key || undefined, // Asegura una clave única para cada elemento
    },
    Array.isArray(children)
      ? children.map(
          (child, index) =>
            typeof child === "string"
              ? child // Si es texto, lo pasa directamente
              : renderReactComponent(child) // Renderiza recursivamente los hijos
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

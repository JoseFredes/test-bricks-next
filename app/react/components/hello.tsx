"use client";

import React, { JSX, useEffect, useState } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";
import { text } from "stream/consumers";

const json: JSONComponent = {
  type: "div",
  props: {
    className: "test",
    style: {
      padding: "20px",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ddd",
      typography: "Arial, sans-serif",
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
      },
      children: ["Click me!"],
    },
  ],
};

export default function ReactPage() {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const domNode = renderComponentFromJSON(json);
    setContent(
      <div
        dangerouslySetInnerHTML={{
          __html: domNode ? domNode.outerHTML : "",
        }}
      />
    );
  }, []);

  return content || <div>Cargando...</div>;
}

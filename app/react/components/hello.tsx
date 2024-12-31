"use client";

import React, { JSX, useEffect, useState } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";

const json: JSONComponent = {
  type: "div",
  props: { className: "test" },
  children: [
    { type: "h1", props: { className: "title" }, children: ["Hello, React!"] },
    { type: "p", children: ["This is a paragraph."] },
  ],
};

export default function ReactPage() {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    // Renderiza dinámicamente el contenido JSON
    const domNode = renderComponentFromJSON(json);
    setContent(
      <div
        dangerouslySetInnerHTML={{
          __html: domNode ? domNode.outerHTML : "",
        }}
      />
    );
  }, []);

  // Mientras se renderiza, muestra un placeholder
  return content || <div>Cargando...</div>;
}

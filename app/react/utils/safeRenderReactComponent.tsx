import { JSONComponent, renderComponentFromJSON } from "jbricks";
import { JSX } from "react";

export function safeRenderReactComponent(json: JSONComponent): JSX.Element {
  if (typeof window === "undefined" || typeof document === "undefined") {
    // Devuelve un placeholder si el código se ejecuta en el servidor.
    return <div>SSR: Placeholder</div>;
  }

  // Llama a renderComponentFromJSON solo en el cliente
  const domNode = renderComponentFromJSON(json);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: domNode ? domNode.outerHTML : "",
      }}
    />
  );
}

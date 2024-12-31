"use client";

import { renderReactComponent, JSONComponent } from "jbricks";

const json: JSONComponent = {
  type: "div",
  props: { className: "test" },
  children: [
    { type: "h1", props: { className: "title" }, children: ["Hello, React!"] },
    { type: "p", children: ["This is a paragraph."] },
  ],
};

export default function ReactPage() {
  return renderReactComponent(json);
}

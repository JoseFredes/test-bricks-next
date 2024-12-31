"use client";

import { JSONComponent } from "jbricks";
import { safeRenderReactComponent } from "../utils/safeRenderReactComponent";

const json: JSONComponent = {
  type: "div",
  props: { className: "test" },
  children: [
    { type: "h1", props: { className: "title" }, children: ["Hello, React!"] },
    { type: "p", children: ["This is a paragraph."] },
  ],
};

export default function ReactPage() {
  return safeRenderReactComponent(json);
}

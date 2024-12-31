"use client";

import React from "react";
import { renderReactComponent } from "../utils/renderReactComponent";
import { JSONComponent } from "jbricks";

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
      type: "CounterComponent",
      props: { className: "counter-class" },
    },
    {
      type: "ToggleComponent",
      props: { style: { marginTop: "20px" } },
    },
  ],
};

export default function ReactPage() {
  return renderReactComponent(json);
}

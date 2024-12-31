"use client";

import { on } from "events";
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
      type: "div",
      props: {
        style: {
          fontSize: "32px",
          color: "#333",
          marginBottom: "20px",
        },
        children: [
          {
            type: "h1",
            props: {
              children: ["Hello from React!"],
            },
          },
          {
            type: "button",
            props: {
              style: {
                backgroundColor: "#00796b",
                color: "#fff",
                padding: "10px 5px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                height: "40px",
                marginTop: "20px",
              },
              onClick: () => (window.location.href = "/"),
              children: ["Home"],
            },
          },
        ],
      },
    },
    {
      type: "p",
      props: {
        style: {
          fontSize: "16px",
          color: "#666",
          marginBottom: "20px",
        },
        children: ["This is a simple React component rendered by JBricks."],
      },
    },
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

import { JSONComponent } from "jbricks";

export const featuresSection: JSONComponent = {
  type: "section",
  props: {
    id: "features",
    style: {
      padding: "40px 20px",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  children: [
    {
      type: "h2",
      props: { style: { fontSize: "28px", color: "#333" } },
      children: ["Características"],
    },
    {
      type: "ul",
      props: {
        style: {
          margin: "20px 0",
          padding: "0 20px",
          listStyle: "circle",
          color: "#555",
        },
      },
      children: [
        { type: "li", children: ["Fácil de usar."] },
        { type: "li", children: ["Agnóstico al framework."] },
        { type: "li", children: ["Altamente extensible."] },
      ],
    },
  ],
};

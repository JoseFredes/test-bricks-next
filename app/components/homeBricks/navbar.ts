import { JSONComponent } from "jbricks";

export const navbar: JSONComponent = {
  type: "nav",
  props: {
    className: "navbar",
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "#fff",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
    },
  },
  children: [
    {
      type: "span",
      props: { style: { fontWeight: "bold", fontSize: "18px" } },
      children: ["JBricks"],
    },
    {
      type: "div",
      props: { style: { display: "flex", gap: "15px" } },
      children: [
        {
          type: "a",
          props: {
            href: "#features",
            style: { color: "#fff", textDecoration: "none" },
          },
          children: ["Features"],
        },
        {
          type: "a",
          props: {
            href: "#about",
            style: { color: "#fff", textDecoration: "none" },
          },
          children: ["About"],
        },
        {
          type: "a",
          props: {
            href: "#contact",
            style: { color: "#fff", textDecoration: "none" },
          },
          children: ["Contact"],
        },
      ],
    },
  ],
};

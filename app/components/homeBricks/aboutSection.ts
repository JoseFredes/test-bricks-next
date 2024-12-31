import { JSONComponent } from "jbricks";

export const aboutSection: JSONComponent = {
  type: "section",
  props: {
    id: "about",
    style: { padding: "40px 20px", backgroundColor: "#f5f5f5" },
  },
  children: [
    {
      type: "h2",
      props: { style: { fontSize: "28px", color: "#333" } },
      children: [
        {
          type: "span",
          children: ["Acerca de JBricks"],
        },
        {
          type: "span",
          props: { style: { fontSize: "16px", color: "#555" } },
          children: [" (v1.0.0)"],
        },
        {
          type: "h3",
          props: { style: { fontSize: "20px", color: "#00796b" } },
          children: ["Mira los ejemplos:"],
        },
        {
          type: "button",
          props: {
            style: {
              padding: "10px 20px",
              backgroundColor: "#00796b",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            },
            onClick: () => (window.location.href = "/forms"),
          },
          children: ["Ver ejemplos de formularios"],
        },
      ],
    },
    {
      type: "p",
      props: {
        style: { fontSize: "16px", color: "#555", marginTop: "10px" },
      },
      children: [
        "JBricks es una librería pensada para desarrolladores modernos que buscan flexibilidad en la creación de interfaces dinámicas.",
      ],
    },
  ],
};

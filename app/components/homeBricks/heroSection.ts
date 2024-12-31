import { JSONComponent } from "jbricks";

export const heroSection: JSONComponent = {
  type: "section",
  props: {
    className: "hero",
    style: {
      textAlign: "center",
      padding: "50px 20px",
      backgroundColor: "#e0f7fa",
    },
  },
  children: [
    {
      type: "h1",
      props: { style: { fontSize: "36px", color: "#00796b" } },
      children: ["Bienvenido a JBricks"],
    },
    {
      type: "p",
      props: { style: { fontSize: "18px", color: "#555" } },
      children: [
        "La solución para renderizar componentes dinámicamente desde JSON.",
      ],
    },
    {
      type: "a",
      props: {
        href: "https://npmjs.com/package/jbricks",
        style: {
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#00796b",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      },
      children: ["Descargar en npm"],
    },
  ],
};

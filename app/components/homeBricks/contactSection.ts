import { JSONComponent } from "jbricks";

export const contactSection: JSONComponent = {
  type: "section",
  props: {
    id: "contact",
    style: { padding: "40px 20px", backgroundColor: "#e0f7fa" },
  },
  children: [
    {
      type: "h2",
      props: { style: { fontSize: "28px", color: "#00796b" } },
      children: ["Contáctame"],
    },
    {
      type: "form",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "0 auto",
        },
      },
      children: [
        {
          type: "input",
          props: {
            type: "text",
            placeholder: "Nombre",
            style: {
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            },
          },
        },
        {
          type: "input",
          props: {
            type: "email",
            placeholder: "Correo electrónico",
            style: {
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            },
          },
        },
        {
          type: "textarea",
          props: {
            placeholder: "Mensaje",
            style: {
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            },
          },
        },
        {
          type: "button",
          props: {
            type: "submit",
            style: {
              padding: "10px 20px",
              backgroundColor: "#00796b",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            },
          },
          children: ["Enviar"],
        },
      ],
    },
  ],
};

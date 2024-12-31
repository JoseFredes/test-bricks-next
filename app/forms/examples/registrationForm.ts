import { JSONComponent } from "jbricks";

export const registationForm: JSONComponent = {
  type: "div",
  props: {
    style: {
      padding: "20px",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  children: [
    {
      type: "h3",
      props: { style: { fontSize: "24px", color: "#333" } },
      children: ["Formulario de Registro"],
    },
    {
      type: "form",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
        },
      },
      children: [
        {
          type: "input",
          props: {
            type: "text",
            placeholder: "Nombre Completo",
            style: {
              marginBottom: "10px",
              padding: "10px",
              outline: "1px solid #00796b",
              border: "none",
              borderRadius: "4px",
            },
          },
        },
        {
          type: "input",
          props: {
            type: "email",
            placeholder: "Correo Electrónico",
            style: {
              marginBottom: "10px",
              padding: "10px",
              outline: "1px solid #00796b",
              border: "none",
              borderRadius: "4px",
            },
          },
        },
        {
          type: "input",
          props: {
            type: "password",
            placeholder: "Contraseña",
            style: {
              marginBottom: "10px",
              padding: "10px",
              outline: "1px solid #00796b",
              border: "none",
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
              marginTop: "20px",
            },
          },
          children: ["Registrar"],
        },
      ],
    },
  ],
};

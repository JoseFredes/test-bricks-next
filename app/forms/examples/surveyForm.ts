import { JSONComponent } from "jbricks";

export const surveyForm: JSONComponent = {
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
      children: ["Formulario de Encuesta"],
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
          type: "label",
          children: ["¿Cómo calificarías nuestro servicio?"],
          props: {
            style: {
              color: "#333",
              fontWeight: "bold",
              marginBottom: "10px",
            },
          },
        },
        {
          type: "select",
          props: {
            style: {
              marginBottom: "10px",
              padding: "10px",
              outline: "1px solid #00796b",
              border: "none",
              borderRadius: "4px",
            },
          },
          children: [
            {
              type: "option",
              props: { value: "excellent" },
              children: ["Excelente"],
            },
            {
              type: "option",
              props: { value: "good" },
              children: ["Bueno"],
            },
            {
              type: "option",
              props: { value: "average" },
              children: ["Regular"],
            },
            {
              type: "option",
              props: { value: "poor" },
              children: ["Malo"],
            },
          ],
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              marginTop: "10px",
            },
          },
          children: [
            {
              type: "label",
              children: ["¿Recomendarías nuestro servicio?"],
              props: {
                style: {
                  color: "#333",
                  fontWeight: "bold",
                  marginRight: "10px",
                },
              },
            },
            {
              type: "input",
              props: {
                type: "checkbox",
              },
            },
          ],
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

"use client";

import React, { useEffect } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";

const Page = () => {
  useEffect(() => {
    // Definición JSON
    const uiDefinition: JSONComponent = {
      type: "div",
      props: {
        className: "landing-container",
        style: {
          fontFamily: "Arial, sans-serif",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        },
      },
      children: [
        {
          type: "section",
          props: {
            id: "form-examples",
            style: {
              padding: "40px 20px",
              backgroundColor: "#f0f0f0",
            },
          },
          children: [
            // Simple Contact Form
            {
              type: "div",
              props: { style: { marginBottom: "40px" } },
              children: [
                {
                  type: "h3",
                  props: { style: { fontSize: "24px", color: "#333" } },
                  children: ["Formulario de Contacto"],
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
                        placeholder: "Correo Electrónico",
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
            },
            // Survey Form
            {
              type: "div",
              props: { style: { marginBottom: "40px" } },
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
                      maxWidth: "400px",
                      margin: "0 auto",
                    },
                  },
                  children: [
                    {
                      type: "label",
                      children: ["¿Cómo calificarías nuestro servicio?"],
                    },
                    {
                      type: "select",
                      props: {
                        style: {
                          marginBottom: "10px",
                          padding: "10px",
                          border: "1px solid #ccc",
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
                      type: "label",
                      children: ["¿Recomendarías nuestro servicio?"],
                    },
                    {
                      type: "input",
                      props: {
                        type: "checkbox",
                        style: { marginBottom: "10px" },
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
            },
            // Login Form
            {
              type: "div",
              props: { style: { marginBottom: "40px" } },
              children: [
                {
                  type: "h3",
                  props: { style: { fontSize: "24px", color: "#333" } },
                  children: ["Formulario de Inicio de Sesión"],
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
                        placeholder: "Usuario",
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
                        type: "password",
                        placeholder: "Contraseña",
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
                      children: ["Iniciar Sesión"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    // Renderizar el JSON en un contenedor
    const appContainer = document.getElementById("app");
    if (appContainer) {
      const renderedComponent = renderComponentFromJSON(uiDefinition);
      appContainer.appendChild(renderedComponent);
    }
  }, []);

  return <div id="app" />;
};

export default Page;

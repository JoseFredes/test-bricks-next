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
          backgroundColor: "#ffffff",
        },
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              marginBottom: "20px",
              marginTop: "10px",
              padding: "30px",
              justifyContent: "space-between",
            },
          },
          children: [
            {
              type: "h1",
              props: {
                style: {
                  textAlign: "center",
                  fontSize: "32px",
                  color: "#333",
                  marginBottom: "20px",
                },
              },
              children: ["Ejemplos de Formularios"],
            },
            {
              type: "button",
              props: {
                style: {
                  backgroundColor: "#00796b",
                  color: "#fff",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  height: "40px",
                },
                onClick: () => (window.location.href = "/"),
              },
              children: ["Volver al Home"],
            },
          ],
        },
        {
          type: "section",
          props: {
            id: "form-examples",
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "25px",
              padding: "40px",
              backgroundColor: "#ffffff",
            },
          },
          children: [
            // Simple Contact Form
            {
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
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "#333",
                      marginBottom: "10px",
                    },
                  },
                  children: ["Formulario de Contacto"],
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
                        placeholder: "Nombre",
                        style: {
                          marginBottom: "10px",
                          padding: "10px",
                          border: "none",
                          borderRadius: "4px",
                          outline: "1px solid #00796b",
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
                      type: "textarea",
                      props: {
                        placeholder: "Mensaje",
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
                          marginTop: "10px",
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
            },
            // Login Form
            {
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
                  props: {
                    style: {
                      fontSize: "24px",
                      color: "#333",
                      marginBottom: "20px",
                    },
                  },
                  children: ["Formulario de Inicio de Sesión"],
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
                        placeholder: "Usuario",
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
                          marginBottom: "20px",
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
                        },
                      },
                      children: ["Iniciar Sesión"],
                    },
                  ],
                },
              ],
            },
            // Registration Form
            {
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

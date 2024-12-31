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
        // Navbar
        {
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
        },
        // Hero Section
        {
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
        },
        // Features Section
        {
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
        },
        // About Section
        {
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
        },
        // Contact Section
        {
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
        },
        {
          type: "footer",
          props: {
            style: {
              padding: "20px",
              backgroundColor: "#333",
              color: "#fff",
              textAlign: "center",
              marginTop: "20px",
            },
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  marginBottom: "10px",
                  marginTop: "10px",
                  justifyContent: "center",
                  gap: "20px",
                },
              },
              children: [
                {
                  type: "p",
                  children: [
                    {
                      type: "span",
                      children: ["Hecho con ❤️ por "],
                    },
                    {
                      type: "a",
                      props: {
                        href: "https://github.com/JoseFredes",
                        style: { color: "#fff", textDecoration: "none" },
                      },
                      children: ["@JoseFredes"],
                    },
                  ],
                },
                {
                  type: "p",
                  children: [
                    {
                      type: "a",
                      props: {
                        href: "https://www.linkedin.com/in/josefredesacevedo/",
                        style: {
                          color: "#fff",
                          textDecoration: "none",
                          marginTop: "10px",
                        },
                      },
                      children: ["LinkenIn"],
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

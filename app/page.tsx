"use client";

import React, { useEffect } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";
import { navbar } from "./components/homeBricks/navbar";
import { heroSection } from "./components/homeBricks/heroSection";
import { featuresSection } from "./components/homeBricks/featuresSection";
import { aboutSection } from "./components/homeBricks/aboutSection";

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
        navbar,
        // Hero Section
        heroSection,
        // Features Section
        featuresSection,
        // About Section
        aboutSection,
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

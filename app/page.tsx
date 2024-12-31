"use client";

import React, { useEffect } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";
import { navbar } from "./components/homeBricks/navbar";
import { heroSection } from "./components/homeBricks/heroSection";
import { featuresSection } from "./components/homeBricks/featuresSection";
import { aboutSection } from "./components/homeBricks/aboutSection";
import { contactSection } from "./components/homeBricks/contactSection";

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
        contactSection,
        // Footer
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

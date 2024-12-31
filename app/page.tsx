"use client";

import React, { useEffect } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";
import { navbar } from "./components/homeBricks/navbar";
import { heroSection } from "./components/homeBricks/heroSection";
import { featuresSection } from "./components/homeBricks/featuresSection";
import { aboutSection } from "./components/homeBricks/aboutSection";
import { footerSection } from "./components/homeBricks/footerSection";

const Page = () => {
  useEffect(() => {
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
        // // Contact Section
        // contactSection,
        // Footer
        footerSection,
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

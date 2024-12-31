"use client";

import React, { useEffect } from "react";
import { JSONComponent, renderComponentFromJSON } from "jbricks";
import {
  simpleContactForm,
  loginForm,
  surveyForm,
  registrationForm,
} from "./examples";

const Page = () => {
  useEffect(() => {
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
            simpleContactForm,
            // Survey Form
            surveyForm,
            // Login Form
            loginForm,
            // Registration Form
            registrationForm,
          ],
        },
      ],
    };

    const appContainer = document.getElementById("app");
    if (appContainer) {
      const renderedComponent = renderComponentFromJSON(uiDefinition);
      appContainer.appendChild(renderedComponent);
    }
  }, []);

  return <div id="app" />;
};

export default Page;

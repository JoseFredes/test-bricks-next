import { JSONComponent } from "jbricks";

export const footerSection: JSONComponent = {
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
};

import { renderReactComponent, JSONComponent } from "jbricks";

const json: JSONComponent = {
  type: "div",
  props: { className: "test" },
  children: ["Hello, React!"],
};

const ReactComponent = renderReactComponent(json);

export default ReactComponent;

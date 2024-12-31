import React, { JSX } from "react";
import { JSONComponent } from "jbricks";
import componentMap from "../components/componentMap";

export function renderReactComponent(json: JSONComponent): JSX.Element {
  const { type, props = {}, children = [] } = json;

  const CustomComponent = componentMap[type];
  if (typeof CustomComponent === "function") {
    return React.createElement(CustomComponent, props);
  }

  return React.createElement(
    type,
    {
      ...props,
      key: props.key || undefined,
    },
    Array.isArray(children)
      ? children.map((child, index) =>
          typeof child === "string"
            ? child
            : renderReactComponent({
                ...child,
                props: { ...child.props, key: child.props?.key || index },
              })
        )
      : null
  );
}

// import { JSONComponent, renderComponentFromJSON } from "jbricks";
// import { JSX } from "react";

// export function safeRenderReactComponent(json: JSONComponent): JSX.Element {
//   if (typeof window === "undefined" || typeof document === "undefined") {
//     return <div>SSR: Placeholder</div>;
//   }

//   const domNode = renderComponentFromJSON(json);

//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: domNode ? domNode.outerHTML : "",
//       }}
//     />
//   );
// }

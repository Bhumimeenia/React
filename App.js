import React from "react";
import ReactDOM from "react-dom/client";

// React element
// React.createElement => ReactElement.JS (Object) => HTMLElement(render)
const heading = React.createElement("h1", null, "Hello World");

console.log(heading); 

// JSX - HTMl-like or XML-like syntax
// jsx(transpiled) -> before going to the js engine

// JSX => React.createElement => ReactElement.JS (Object) => HTMLElement(render)
const jsxHeading = <h1>Hello World from JSX</h1>;
console.log(jsxHeading); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); 


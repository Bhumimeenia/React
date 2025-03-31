import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsxHeading = <h1>Hello World from JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); 

// React component
// -class based
// -function based

// const Fn = () => true; 

// const Fn1  = () => {
//     return true;
// }

// Root Functional Componenet
const HeadingComponent = () => {
  return <h1>Hello World from React Component</h1>;
}; 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>); 


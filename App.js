import React from "react";
import ReactDOM from "react-dom/client";

const ele = <span>Namaste React</span>;

const title = (
  <h1>
    Hey I'm Bhumi
    {ele}
  </h1>
);

// const Title = function () {
//   return <h1>Namaste Bhumi</h1>;
// };

const a = 10000;
// Componenet Composition
const HeadingComponent = () => (
  <div id="container">
    {/* <Title /> */}
    {title}
    <h1>Hello World from React Component</h1>
     {a + 100}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

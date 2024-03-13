import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement =>  kReactElement(Object) => render through Dom (html Element):
const heading = React.createElement("h1", {id:"heading"}, "React");

//JSX is  HTML-like syntax but JSX is not a HTML in JS.
//JSX (Transpiled before it reaches the JS) -bundler -babel

//JSX => babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = <h1> React using JSX</h1>;

//React elements
const head = <span>This Is React Element </span>;
const idea = (

<h1>{head}/this idea is about a boy who last himself in search for his mission</h1>)


                    // always use Upper case when creating react component 
// React component 
const Title = () => <h1>This Is React Tutorial</h1>

function Title1(){
    return <h1>This Is React Tutorial 1.0</h1>
};
 // React component
  // Accessing component in nested is also called  component composition
const HeadingComponent = () => (
    <div>
    {Title()}
    <Title1/>
    <h1>React is amazing I love React</h1>
    {idea}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


# 2 types of routing in web apps

- Client Side Routing 
- Server Side Routing 
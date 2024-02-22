import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "hello world from react!");

const parent = React.createElement("div",{id: "parent"},
React.createElement("div",{id:"child"},React.createElement("h1",{},"h1 is created")));
console.log(heading) // it is not h1 it is object.

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // this render method convert object and convert in h1 
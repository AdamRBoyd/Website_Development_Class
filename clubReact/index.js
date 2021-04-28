// index.js file
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";

let contents = <><Menu /> <Home /></>; 

ReactDOM.render(contents, document.getElementById("root"));
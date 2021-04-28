// index.js file
import React from "react";
import ReactDOM from "react-dom";
import Menu from "./menu";
import Home from "./home";
import Activities from "./activities";
import events from "./eventData.json";
import Membership from "./membership";

let contents = <> <Menu /> <Membership /></ > ;

ReactDOM.render(contents, document.getElementById("root"));
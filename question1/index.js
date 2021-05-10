import React from "react";
import ReactDOM from "react-dom";
import states from "./states.json";
import StateViewer from "./stateViewer"; // You will supply this file/component

let contents = (
  <main>
    <h1>United States</h1>
    <h2>All</h2>
    <StateViewer states={states} />
    <h2>Filtered by: Population greater than 10 Million</h2>
    <StateViewer states={states} filter={true} />
  </main>
);

ReactDOM.render(contents, document.getElementById("root"));

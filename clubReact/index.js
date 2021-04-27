// index.js file
import React from "react";
import ReactDOM from "react-dom";

let myName = "Adam Boyd";
let contents = <section>
    <h1>Hello from React</h1>
    <h2>{myName}</h2>
  </section>;

ReactDOM.render(contents, document.getElementById("root"));
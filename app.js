import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDom form "reacrt-dom"
let heading = React.createElement("h1",{id:"ele"},"hello");
      let root = ReactDOM.createRoot (document.getElementById("root"));
      root.render(heading)

let parents = React.createElement("h1",{id:"parent"},React.createElement("h1",{id:"h1"},"I am form h1"))

root.render(parents)
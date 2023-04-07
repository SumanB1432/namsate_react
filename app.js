import React from "react";
import ReactDOM from "react-dom/client";
// // import ReactDom form "reacrt-dom"
// let heading = React.createElement("h1",{id:"ele"},"hello");
//       let root = ReactDOM.createRoot (document.getElementById("root"));
//       root.render(heading)

// let parents = React.createElement("h1",{id:"parent"},React.createElement("h1",{id:"h1"},"I am form h1"))

// root.render(parents)

let root = ReactDOM.createRoot(document.getElementById("root"))
let Footer=()=>{
      return <h2>I am Footer</h2>
}
let Heading =()=>{
      return(
      <div>
            <h1>I am Header</h1>
            <Footer/>
      </div>
      )
}
root.render(<Heading/>)

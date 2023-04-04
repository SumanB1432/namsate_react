let heading = React.createElement("h1",{id:"ele"},"hello");
      let root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading)

let parents = React.createElement("h1",{id:"parent"},"hello there")

root.render(parents)
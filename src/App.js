import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import RestroMenu from "./component/ResotentMenu";
// // import ReactDom form "reacrt-dom"
// let heading = React.createElement("h1",{id:"ele"},"hello");
//       let root = ReactDOM.createRoot (document.getElementById("root"));
//       root.render(heading)

// let parents = React.createElement("h1",{id:"parent"},React.createElement("h1",{id:"h1"},"I am form h1"))

// root.render(parents)

let root = ReactDOM.createRoot(document.getElementById("root"))
// let Footer=()=>{
//       return <h2>I am Footer</h2>
// }
// let Heading =()=>{
//       return(
//       <div>
//             <h1>I am Header</h1>
//             <Footer/>
//       </div>
//       )
// }




const AppLayOut = ()=>{
      return (
            <div>
                <Header/>
                <Outlet />
                {/* <Body /> */}
                <Footer name="Suman Bera"/>
            </div>
      )
}
let appRouter = createBrowserRouter([
      {
            path:"/",
            element:<AppLayOut />,
            errorElement:<Error />,
            children:[{
                  path:"/about",
                  element:<About />
            },
            {
                  path:"/contact",
                  element:<Contact />
            },
            {
                  path:"/",
                  element:<Body />
            },
            {
                  path:"/restaurant/:id",
                  element:<RestroMenu />
            }
            
            ]
      },
     
])

root.render(<RouterProvider router={appRouter} />)

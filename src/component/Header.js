import { LOGO_URL } from "../utils/Constants";
import {useState} from "react";
import {Link} from "react-router-dom"
const Header = ()=>{
      let[logIn,setLogin] = useState("true")
    return (
          <div className="header">
          <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="image"></img>
          </div>
          <div className="nav-items">
                <ul >
                      <Link style={{"textDecoration":"none"}} to="/"><li>Home</li></Link>
                      <Link style={{"textDecoration":"none"}} to="/about"><li>About</li></Link>
                      <Link style={{"textDecoration":"none"}} to="/contact"><li>Contact</li></Link>
                      <li>Cart</li>
                </ul>
                
          </div>
          {
            (logIn=="true")?<button onClick={()=>setLogin("false")}>Login</button>:<button onClick={()=>setLogin("true")}>lOGOUT</button>
          }
          
          </div>
    )
}
export default Header;
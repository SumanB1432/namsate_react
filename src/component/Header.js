import { LOGO_URL } from "../utils/Constants";
const Header = ()=>{
    return (
          <div className="header">
          <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="image"></img>
          </div>
          <div className="nav-items">
                <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                      <li>Cart</li>
                </ul>
          </div>
          </div>
    )
}
export default Header;
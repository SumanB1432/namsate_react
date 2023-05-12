import React from "react";
import {SocialIcon} from "react-social-icons"
class Footer extends React.Component{
    
    constructor(){
        super();
        this.state={
            count:1
        }
    }
render(){
    return(
        <div className="footer"> 
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>increment</button>
        <div className="footer-logo">
        <SocialIcon url="https://github.com/SumanB1432"></SocialIcon>
        <SocialIcon url="https://www.linkedin.com/in/suman-bera-816642191/"></SocialIcon>
        <SocialIcon url="https://www.facebook.com/suman.bera.5832343/"></SocialIcon>
        </div><br></br><br></br>
        <div><p>&copy;</p> suman bera</div>
        
        </div>
    )
}

}
export default Footer
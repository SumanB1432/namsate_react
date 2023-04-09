import ResCart from "./ResCart";
import {restaurantList} from "../utils/Constants";
import { useState } from "react";
let resto = [
    {
    data:{
        
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        
        name:"Dominose",
        cuisines:["pizza"],
        avgRating:3,
        deliveryTime:30



    }
}
]
const Body = ()=>{
    let [res,setResList] = useState(restaurantList)
    return (<div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
            res= res.filter((res)=>res.data.avgRating<4); console.log(resto)
            setResList(res)
            }}>Top Rated Restorent
            </button>
            
            
          </div>
          
          <div className="res-container">

                {
                      res.map((item)=>
                            <ResCart  key={item.data.id} resData = {item}/>

                      )
                }
                {/* <ResCart resData = {restaurantList[0]}/> */}
            
                
                

          </div>

    </div>)
}
export default Body;
import ResCart from "./ResCart";
import {restaurantList} from "../utils/Constants";
import { useState,useEffect } from "react";
import Loading from "./LoadingU";
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
      let [allRes,setAllres] = useState([])
    let [filterRes,setFilterRes] = useState([])
    let [res1,setRes1] = useState("")

    useEffect(()=>{
     getRestorent()
    },[])
    console.log("render")

    async function getRestorent(){
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.724178&lng=88.4255165&page_type=DESKTOP_WEB_LISTING");
      let json = await data.json();
      setAllres(json?.data?.cards[2]?.data?.data?.cards)
      setFilterRes(json?.data?.cards[2]?.data?.data?.cards)
    }

    function changeVal(e){
      console.log(e.target.value)
      setRes1(e.target.value)
    }
    function search(filter){
      let data = allRes.filter((item)=>item.data.name.indexOf(filter)!=-1)
      setFilterRes(data)

    }


    return filterRes.length==0 ? <Loading /> : (<div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
            filterRes= filterRes.filter((res)=>res.data.avgRating>4);
            setFilterRes(filterRes)
            }}>Top Rated Restorent
            </button>
            
            
          </div>
          <div className="search">
            <input type="text" value={res1} onChange={(e)=>changeVal(e)}></input>
            <button type="button" onClick={()=>search(res1)}>Search</button>

          </div>
          
          <div className="res-container">

                {
                      filterRes.map((item)=>
                            <ResCart  key={item.data.id} resData = {item}/>

                      )
                }
                {/* <ResCart resData = {restaurantList[0]}/> */}
            
                
                

          </div>

    </div>)
}
export default Body;
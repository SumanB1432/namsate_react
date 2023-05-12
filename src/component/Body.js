import ResCart from "./ResCart";
import {restaurantList} from "../utils/Constants";
import { useState,useEffect } from "react";
import Loading from "./LoadingU";
import Filter from "./FilterLoading";
import { Link } from "react-router-dom";
import { Search } from "../utils/Search";
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
//     function search(filter){
//        filter = filter.toLowerCase();
//        console.log(filter)
//       let data = allRes.filter((item)=>item?.data?.name?.toLowerCase().indexOf(filter)!=-1)
//       console.log(data.length)

//       data.length !== 0 ?  setFilterRes(data) : setFilterRes(null)
   
// }
//     if(filterRes?.length==0) return <h1>No resturent is found</h1>

    return allRes.length==0 ? <Loading /> : (<div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
            filterRes= filterRes.filter((res)=>res.data.avgRating>4);
            setFilterRes(filterRes)
            }}>Top Rated Restorent
            </button>
            
            
          </div>
          <div className="search">
            <input type="text" value={res1} onChange={(e)=>changeVal(e)}></input>
            <button type="button" onClick={()=>{
              let data = Search(res1,allRes)
             data.length!=0? setFilterRes(data):setFilterRes(null)
            }}>Search</button>

          </div>
          
          <div className="res-container">
            
               
                {
                  
                      filterRes!=null ?
                      filterRes.map((item)=>
                         <Link to={`/restaurant/${item.data.id}`} style={{"textDecoration":"none"}}><ResCart  key={item.data.id} resData = {item}/></Link>   

                      ): <Filter />

                }
                {/* <ResCart resData = {restaurantList[0]}/> */}
            
                
                

          </div>

    </div>)
}
export default Body;
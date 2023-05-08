
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/Constants";

const RestroMenu = ()=>{
    const params = useParams();
    const {id} = params;
    const [restorent,setRestorent] = useState(null)
    // console.log(params)
    useEffect(()=>{
        getRestroInfo();
        // setRestorent()
    },[])

    async function getRestroInfo(){
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.724178&lng=88.4255165&restaurantId=${id}&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A77366%2C%22primaryRestaurantId%22%3A323086%2C%22cloudinaryId%22%3A%2253cfec6213f561d015df7928aeddb324%22%2C%22brandId%22%3A77366%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION`);
        let json = await data.json();
        console.log(json.data)
        setRestorent(json.data)
        // console.log(restorent)
        
    }
    // console.log(restorent)
     return restorent!==null?(

        <>
            
            <h1> Restraint id: {id}</h1>
            <h2>{restorent?.cards[0].card.card.info.name}</h2>
            <img src={CDN_URL+restorent.cards[0].card.card.info.cloudinaryImageId}></img>
            <h1>{restorent?.cards[0].card.card.info.avgRating}</h1>
            <h2>{restorent?.cards[0].card.card.info.menu}</h2>
            
        
        
        </>
    ):(
        <>
        </>
    )
}
export default RestroMenu;
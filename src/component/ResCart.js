import { CDN_URL } from "../utils/Constants";
const ResCart = (props) => {
  let { resData } = props;
  let { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    resData.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
      ></img>
      <h3 style={{ color: "green" }}>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>Delivary Time-{deliveryTime}</h5>
    </div>
  );
};
export default ResCart;

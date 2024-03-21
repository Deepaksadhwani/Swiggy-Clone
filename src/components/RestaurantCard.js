import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, sla, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] hover:shadow-black shadow-sm hover:scale-[1.1] transition-all duration-200 bg-gray-100 rounded-lg hover:bg-white ">
      <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg"> {name} </h3>
      <h4> {cuisines.join(", ")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

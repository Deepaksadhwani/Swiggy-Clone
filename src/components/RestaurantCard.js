import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, cloudinaryImageId, sla, avgRating, costForTwo } =
    resData?.info;
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] hover:shadow-black shadow-sm hover:scale-[1.1] transition-all duration-200 bg-gray-100 rounded-lg hover:bg-white ">
      <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg"> {name} </h3>
      <h4> {cuisines.join(", ")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

//higher order component

// input -resturantCard => useBodyCards isOpened
export const withIsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-600 p-1  text-white font-semibold  rounded-md">
          Closed
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};
export default RestaurantCard;

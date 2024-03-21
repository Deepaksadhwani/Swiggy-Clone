import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyCards from "../utils/useBodyCards";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resList, filterRes, setFilterRes } = useBodyCards();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  // Conditional Rendering - rendering bases on condition is called conditional rendering
  return !resList || resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex flex-col sm:flex-row space-x-3 items-center bg-gradient-to-b to-red-300 from-red-100 border-upper border-black  justify-center  ">
        <div className="">
          <input
            type="text"
            className="border-2 shadow-md shadow-gray-500  border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="border-2 p-1 bg-green-600 m-1  hover:bg-red-400 transition-all duration-200 text-white font-semibold rounded-md"
            onClick={() => {
              console.log(searchText);
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("filter search", filteredRes);
              setFilterRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-2 p-1 bg-green-600 m-1  hover:bg-red-400 transition-all duration-200 text-white font-semibold rounded-md"
          onClick={() => {
            filterList = resList.filter((res) => res.info.avgRating > 4);
            console.log("fiter rating", filterList);
            setFilterRes(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center bg-red-300">
        {filterRes.map((restaurant) =>
          restaurant.info ? (
            <Link
              className="resLink"
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;

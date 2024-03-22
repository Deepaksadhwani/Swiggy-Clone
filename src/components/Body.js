import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useBodyCards from "../utils/useBodyCards";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { resList, filterRes, setFilterRes } = useBodyCards();
  const onlineStatus = useOnlineStatus();

  const RestaurantCardOpened = withIsOpenLabel(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  // Conditional Rendering - rendering bases on condition is called conditional rendering
  return !resList || resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex flex-col relative sm:flex-row space-x-3 items-center bg-yellow-500 border-upper border-black  justify-center  ">
        <label className="absolute left-0">UserName:</label>
        <input
          className="absolute left-20 border-2 border-black shadow-md shadow-gray-500"
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
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
            className="border-2 p-1 bg-green-700 m-1  hover:bg-red-500 transition-all duration-200 text-white font-semibold rounded-md"
            onClick={() => {
              // console.log(searchText);
              const filteredRes = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log("filter search", filteredRes);
              setFilterRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-2 p-1 bg-green-700 m-1  hover:bg-red-500 transition-all duration-200 text-white font-semibold rounded-md"
          onClick={() => {
            filterList = resList.filter((res) => res.info.avgRating > 4);
            // console.log("fiter rating", filterList);
            setFilterRes(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center bg-yellow-500">
        {filterRes.map((restaurant) =>
          restaurant.info ? (
            <Link
              className="resLink"
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantCard resData={restaurant} />
              ) : (
                <RestaurantCardOpened resData={restaurant} />
              )}
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;

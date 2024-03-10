import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurant();
  }, []);
 
  const fetchRestaurant = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      setResList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRes(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Conditional Rendering - rendering bases on condition is called conditional rendering
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
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
          className="filter-btn"
          onClick={() => {
            filterList = resList.filter((res) => res.info.avgRating > 4);
            console.log("fiter rating", filterList);
            setFilterRes(filterList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filterRes.map((restaurant) =>
          restaurant.info ? (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default Body;

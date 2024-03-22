import { useState, useEffect } from "react";
const useBodyCards = () => {
  const [resList, setResList] = useState([]);
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      );
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

  return { resList, filterRes, setFilterRes };
};

export default useBodyCards;

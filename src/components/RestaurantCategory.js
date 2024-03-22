import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const clickHandler = () => {
    setShowIndex();
  };

  console.log(showItems);
  return (
    <div className="">
      {/*Header*/}
      <div className="w-3/6 mx-auto hover:scale-y-[1.01]  transition-all duration-200  hover:bg-gradient-to-r from-green-500 to-teal-600 bg-gray-100 shadow-lg my-4  p-4">
        <div
          className="flex justify-between  cursor-pointer"
          onClick={clickHandler}
        >
          <span className="font-semibold  text-xl">
            {data.title}({data.itemCards.length})
          </span>
          <span className="opacity-90 text-2xl hover:scale-125 transition-all duration-200">
            🔽
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
      {/* Accordian body*/}
    </div>
  );
};

export default RestaurantCategory;

import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {

  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-b-2 border-gray-200 text-left space-x-2 flex items-center justify-between"
          key={item.card.info.id}
        >
          <div className="py-2flex flex-col w-9/12">
            <span>{item.card.info.name}</span>
            <span>
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="relative w-3/12 p-4">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="w-full "
            />
            <button className="p-2  bg-green-700 text-white  border-2 shadow-lg bottom-3  font-bold left-4 rounded-full  border-white hover:text-green-700 transition-all duration-200 hover:bg-white hover:border-green-700 absolute mx-auto cursor-pointer">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

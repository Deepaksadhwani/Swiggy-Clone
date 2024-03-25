import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("login");
  const onlineStatus = useOnlineStatus();
  //subscribingto the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="">
      <div className="bg-gradient-to-r border-b-2 border-gray-500  from-green-600 to-teal-700 shadow-lg flex sm:justify-between items-center sm:flex-row flex-col">
        <img
          className="w-40 rounded-full ml-3 p-2 sm:block hidden"
          src={LOGO_URL}
        />
        <div className="text-white transition-all duration-300 font-semibold rounded-full">
          <ul className="flex sm:p-5 sm:m-4 mr-7 sm:text-[20px] sm:space-x-4 sm:items-center  ">
            <li className="sm:block hidden">
              Online Status: {onlineStatus ? <span>🟢</span> : <span>🔴</span>}
            </li>
            <li className="hover:border-2 p-2 rounded-full hover:bg-red-400 hover:scale-125 hover:border-yellow-500 transition-all duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-2 p-2 hover:scale-125 rounded-full hover:bg-red-400 hover:border-yellow-500 transition-all duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-2 p-2 hover:scale-125 rounded-full hover:bg-red-400 hover:border-yellow-500 transition-all duration-200">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="hover:border-2 p-2 hover:scale-125  rounded-full hover:bg-red-400 hover:border-yellow-500 transition-all duration-200">
              <Link to="/cart">Cart-({cartItems.length}items)</Link>
            </li>
            <button
              className="hover:border-2 p-2 hover:scale-125 transition-all duration-200 rounded-full hover:bg-red-400 hover:border-yellow-500"
              onClick={() =>
                login === "login" ? setLogin("logout") : setLogin("login")
              }
            >
              {login}
            </button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
      <div className="body">
        <div></div>
      </div>
    </div>
  );
};

export default Header;

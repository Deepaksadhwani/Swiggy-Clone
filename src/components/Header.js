import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <div className="nav-items">
          <ul>
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>Cart</li>
            <button
              className="login"
              onClick={() =>
                login === "login" ? setLogin("logout") : setLogin("login")
              }
            >
              {login}
            </button>
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

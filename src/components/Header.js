import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [login, setLogin] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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

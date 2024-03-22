import { useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const User = () => {
  const [setInfo, setInfoList] = useState([]);
  useEffect(() => {
    getUserInfoData();
  }, []);

  const { loggedInUser } = useContext(UserContext);
  const getUserInfoData = async () => {
    const data = await fetch("https://api.github.com/users/deepaksadhwani");
    const json = await data.json();
    console.log(json);
    setInfoList(json);
  };

  return (
    <div>
      <h1>this is {loggedInUser}</h1>
      <img src={setInfo.avatar_url} alt="" />
      <h3>{setInfo.location}</h3>
      <h3>Contact:@deepaksadhwani</h3>
    </div>
  );
};

export default User;

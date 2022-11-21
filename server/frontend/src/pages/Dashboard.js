import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";
import WishList from "../components/WishList";
import { MovieContext } from "../context/context";


const Dashboard = () => {
  const { isLoggedIn } = useContext(MovieContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      console.log("logout1");
      navigate("/");
    }
  });
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <div>
          <h2>Favorites List</h2>
          <FavoriteList />
        </div>
        <div>
          <h2>To Watch List</h2>
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// getfavoritlist function (used inside useEffect)
// useState methods to set the favorite list

// function getfavoritlist(){
// fetch api based on the userId
// data
// setfavoritlist(data)
// }

// print the list out using map

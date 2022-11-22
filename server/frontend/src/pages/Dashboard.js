import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";
import WishList from "../components/WishList";

const Dashboard = () => {
  const { userId } = useParams();
  const [favList, setFavList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const fetchList = async () => {
    const resRaw = await fetch(`/api/list/${userId}`);
    console.log("been called");
    if (resRaw.ok) {
      const res = await resRaw.json();
      setFavList(res.favList ? res.favList : []);
      setWishList(res.wishList ? res.wishList : []);
    }
  };

  useEffect(() => {
    fetchList();
  }, [userId]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <div>
          <h2>Favorites List</h2>
          <FavoriteList list={favList} updateList={fetchList} />
        </div>
        <div>
          <h2>To Watch List</h2>
          <WishList list={wishList} updateList={fetchList} />
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

// Aaron Leung and Yao
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";
import WishList from "../components/WishList";
import { MovieContext } from "../context/context";

const Dashboard = () => {
  const { userId } = useParams();
  const [favList, setFavList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const { isLoggedIn } = useContext(MovieContext);
  const navigate = useNavigate();
  
  // Making sure users can't return back to last page once logged out
  // Aaron Leung
  useEffect(()=>{

    if(!isLoggedIn){
      console.log("logout1");
      navigate("/");
    }
  });

  // Yao
  const fetchList = async () => {
    const resRaw = await fetch(`/api/list/${userId}`);
    if (resRaw.ok) {
      const res = await resRaw.json();
      setFavList(res.favList);
      setWishList(res.wishList);
    }
  };

  useEffect(() => {
    fetchList();
  }, [userId]);

  // Aaron Leung
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

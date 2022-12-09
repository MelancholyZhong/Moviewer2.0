// Aaron Leung and Yao
import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FavoriteList from "../components/FavoriteList";
import WishList from "../components/WishList";
import { MovieContext } from "../context/context";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { userId } = useParams();
  const { isLoggedIn, favList, setFavList, wishList, setWishList } =
    useContext(MovieContext);
  const navigate = useNavigate();

  // Making sure users can't return back to last page once logged out
  // Aaron Leung
  useEffect(() => {
    if (!isLoggedIn) {
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
    <div role="main">
      <h1>
        Dashboard{" "}
        <i
          className="bi bi-question-circle h2"
          title="Your Favorites List and To Watch List will be displayed here.  To start searching for movies, click on Moviewer in the top left corner."
        ></i>
      </h1>
      <div>
        <div>
          <h2>
            {" "}
            <i className="bi bi-box2-heart h2"></i>Favorites List
          </h2>
          <FavoriteList list={favList} updateList={fetchList} />
        </div>
        <div>
          <h2>
            {" "}
            <i className="bi bi-calendar-plus h2"></i>To Watch List
          </h2>
          <WishList list={wishList} updateList={fetchList} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../context/context";

const Dashboard = () => {
  const { isLoggedIn } = useContext(MovieContext);
  const navigate = useNavigate();
  useEffect(()=>{
    
    if(!isLoggedIn){
      console.log("logout1");
      navigate("/");
    }
  });
  return <h1>Dashboard</h1>;
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

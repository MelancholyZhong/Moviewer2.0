import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/context";
import "../styles/NavBar.css";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, userId, setUserId } =
    useContext(MovieContext);
  const logout = async () => {
    setIsLoggedIn(false);
    setUserId();
    try {
      await fetch("/api/login/logout");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar  navbar-expand-md">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Moviewer
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="./movie" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            {isLoggedIn && (
              <Link to={`./dashboard/${userId}`} className="nav-link">
                Dashboard
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <Link to="./login" onClick={logout} className="nav-link">
                Logout
              </Link>
            ) : (
              <Link to="./login" className="nav-link">
                Login
              </Link>
            )}
            {/* <Link to="./login" className="nav-link">
              Login
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

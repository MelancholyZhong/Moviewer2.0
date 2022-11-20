import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/context";
import "../styles/NavBar.css";

const NavBar = () => {
  const { isLoggedIn } = useContext(MovieContext);
  return (
    <nav className="navbar  navbar-expand-md">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Moviewer
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="./movie" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            {isLoggedIn && (
              <Link to="./dashboard" className="nav-link">
                Dashboard
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isLoggedIn ? (
              <Link to="./login" className="nav-link">
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

import React from "react";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-md">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          Moviewer
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="./movie" className="nav-link">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a href="./dashboard" className="nav-link">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a href="./login" className="nav-link">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

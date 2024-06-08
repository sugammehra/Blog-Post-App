// src/components/Navbar.js
import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">Blog Basket</h1>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;

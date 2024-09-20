import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <input type="search" placeholder="search" className="search" />
      </div>
      <div className="nav-actions">
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

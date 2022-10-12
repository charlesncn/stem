import React from "react";
import { Link } from "react-router-dom";
import Logo from "../imgs/westgate-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="links">
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/new">Plan</Link>
            <Link to="/login">Login</Link>
            <span>User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

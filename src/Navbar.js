import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
import { sublinks } from "./Data";

export default function NavBar() {
  return (
    <nav className="nav-con">
      <div className="nav-header">
        <img src={logo} alt="stripe" className="logo" />
        <div className="menu-bar-con">
          <FaBars className="menu-bar" />
        </div>
      </div>
      <ul className="menu-con">
        <li className="menu-item">
          <button className="menu-btn">products</button>
        </li>
        <li className="menu-item">
          <button className="menu-btn">developers</button>
        </li>
        <li className="menu-item">
          <button className="menu-btn">company</button>
        </li>
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
}

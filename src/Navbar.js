import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.svg";
import { useGlobalContext } from "./Context";

export default function NavBar() {
  const { sideBarOpen,  submenuOpen, submenuClose, setLocation } = useGlobalContext();

  const displayItem = (e)=>{
    const page = e.target.textContent
    const position = e.target.getBoundingClientRect()
    const center = (position.left + position.right) /2
    submenuOpen(page)
    setLocation(center)
  }

  function handleSubmenu(e){
    if(!e.target.classList.contains('menu-btn')){
      submenuClose()
    }
  }

  return (
    <nav className="nav-con" onMouseOver={handleSubmenu}>
      <div className="nav-header">
        <img src={logo} alt="stripe" className="logo" />
        <div className="menu-bar-con" onClick={() => sideBarOpen()}>
          <FaBars className="menu-bar"  />
        </div>
      </div>
      <ul className="menu-con">
        <li className="menu-item">
          <button className="menu-btn" onMouseOver={displayItem}>products</button>
        </li>
        <li className="menu-item">
          <button className="menu-btn" onMouseOver={displayItem}>developers</button>
        </li>
        <li className="menu-item">
          <button className="menu-btn" onMouseOver={displayItem}>company</button>
        </li>
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </nav>
  );
}

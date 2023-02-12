import React from "react";
import NavBar from "./Navbar";
import SideBar from "./Sidebar";
import Hero from "./Hero";
import Submenu from "./Submenu";



export default function App(){
    return <div className="main">
        <NavBar/>
        <Submenu/>
        <SideBar/>
        <Hero />
    </div>
}
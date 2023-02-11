import React from "react";
import NavBar from "./Navbar";
import SideBar from "./Sidebar";
import Hero from "./Hero";


export default function App(){
    return <div className="main">
        <NavBar/>
        <SideBar/>
        <Hero />
    </div>
}
import React from "react";
import {FaBars} from 'react-icons/fa'
import logo from './images/logo.svg'

export default function NavBar(){
    return <nav>
        <div>
            <img src={logo} alt='stripe'/>
            <FaBars/>
        </div>
    </nav>
}
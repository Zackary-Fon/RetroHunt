import React from 'react';
import logo_blanc from '../Images/logo_blanc.png';
import HeadMenu from './Menu';
import './Header.css';
import Burger from './Burger';
import {Link} from "react-router-dom";

const Header = () => {
    return ( 
    <header className="header">
        <div className="menu_head">
        <Link to="/"> <img id="logo" src={logo_blanc} alt="Logo"/></Link>
        <HeadMenu/>
        <Burger/>
        </div>
    </header>
    )
}
export default Header;
import React from 'react';
import Logo from '../Images/Logo.png';
import HeadMenu from './Menu';
import Searchbar from './Searchbar';
import './Header.css';
import Burger from './Burger';
import {Link} from "react-router-dom";

const Header = () => {
    return ( 
    <header className="header">
        <div className="menu_head">
        <Link to="/"> <img id="logo" src={Logo} alt="Logo"/></Link>
        <HeadMenu/>
        <Searchbar/>
        <Burger/>
        </div>
    </header>
    )
}
export default Header;
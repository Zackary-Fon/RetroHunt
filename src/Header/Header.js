import React from 'react';
import Logo from '../Images/Logo.png';
import HeadMenu from './Menu';
import Searchbar from './Searchbar';
import './Header.css';
import Burger from './Burger';

const Header = () => {
    return ( 
    <header id="header">
        <div id="menu_head">
        <img id="logo" src={Logo} alt="Logo"/>
        <HeadMenu/>
        <Searchbar/>
        <Burger/>
        </div>
    </header>
    )
}
export default Header;
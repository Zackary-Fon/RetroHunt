import React from 'react';
import logo_dm from '../Images/logo_retrohunt_darkmodecolor1.png';
import HeadMenu from './Menu';
import Searchbar from './Searchbar';
import './Header.css';
import Burger from './Burger';
import {Link} from "react-router-dom";

const Header = () => {
    return ( 
    <header>
        <div className="menu_head">
            <div className="logo_resize">
                <Link to="/"> <img id="logo" src={logo_dm} alt="Logo"/></Link>
            </div>
        <HeadMenu/>
        <Searchbar/>
        <Burger/>
        </div>
    </header>
    )
}
export default Header;
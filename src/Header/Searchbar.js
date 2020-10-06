import React from 'react';
import Loupe from '../Images/Loupe.png';
import './Header.css';
import Search from "../Pages/Search/Search";

const Searchbar = () =>{

    return (
        <p>
        <Search/>
        <img src={Loupe} alt="Loupe" id="Loupe"/>
        </p>
    )
}
export default Searchbar;


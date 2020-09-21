import React from 'react';
import Loupe from '../Images/Loupe.png';
import './Header.css';

const Searchbar = () =>{

    return (
        <p>
        <input type="text" placeholder="Recherchez" id="Recherche"></input>
        <img src={Loupe} alt="Loupe" id="Loupe"/>
        </p>
    )
}
export default Searchbar;


import React, { useState, useEffect } from 'react';
import tabRoutes from "../Rooting/const";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import BigMenu from "./BigMenu";
import Searchbar from "./Searchbar";
import BigMenuDropdown from "./BigMenuDropdown";
import verifo from "./verifNav";
import './BigMenu.css';
//création de la liste,à partir du tableau de routes qui se situe dans "const" ,qui sera le menu

const list = () =>{
    useEffect(()=>{
        verifo()
    })
    const result = tabRoutes.map((any, index)=>{
        /*on met un if car l'index 0 est la route de l'accueil et on met ce lien sur le logo
        du site et les index supérieurs à 5 sont les routes vers d'autres pages comme 
        la mention légale etc... qui ne seront pas dans ce menu */

    if (index==1){
        return (
            <div className="dropdowns">
                <button className="dropbtn" key={any.id} href={any.path} id="categories" id="basic-nav-dropdown">{any.name} 
                    <i className="fas fa-chevron-down"></i>
                </button>
                <div className="dropdown-content">
                    <div className="row-dropdown">
                        <BigMenuDropdown/>
                    </div>
                </div>
            </div>
        )
    } if (index===2){
        return (
            <Nav.Link key={any.id} id="connexion" href={any.path}>{any.name}</Nav.Link>
        )
    } if (index===3){
        return (
            <Nav.Link key={any.id} id="profil" href={any.path}>{any.name}</Nav.Link>
        )
    } if (index===4){
        return (
            <Nav.Link key={any.id} id="annonce" href={any.path}>{any.name}</Nav.Link>
        )
    } else if (index ==4) {
        return(
            <li  className="li_menu_head disabled" key={any.id}>
                <Link to={any.path}>{any.name}</Link>
            </li>
        )
    }else{
        return null
    }
    })
    

    return result ;
}

export default list;
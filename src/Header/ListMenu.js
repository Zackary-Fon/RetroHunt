import React, { useState } from 'react';
import {Link} from "react-router-dom";
import tabRoutes from "../Rooting/const";
import BigMenu from "./BigMenu";

//création de la liste,à partir du tableau de routes qui se situe dans "const" ,qui sera le menu

const list = () =>{
    const [bigMenuDrop, setDropdown] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(false);
        }
    }

    const result = tabRoutes.map((any, index)=>{
        // Ici on affiche catalogue sur l'id égal à 1
    if (index == 1){
        return  (    
        <>   
            <li className="li_menu_head"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Link>
                    Catalogue <i className="fas fa-caret-down"></i>
                </Link>
                {bigMenuDrop && <BigMenu/>}
            </li>
        </>
        )
    }

        /*on met un if car l'index 0 est la route de l'accueil et on met ce lien sur le logo
        du site et les index supérieurs à 5 sont les routes vers d'autres pages comme 
        la mention légale etc... qui ne seront pas dans ce menu */

    if (index>1 && index<4){
        return (
            <li className="li_menu_head" key={any.id}>
                <Link to={any.path}>{any.name}</Link>
            </li>
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
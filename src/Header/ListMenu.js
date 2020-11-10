import React from 'react';
import {Link} from "react-router-dom";
import tabRoutes from "../Rooting/const";

//création de la liste,à partir du tableau de routes qui se situe dans "const" ,qui sera le menu

const list = () =>{
    const result = tabRoutes.map((any, index)=>{
        {/*on met un if car l'index 0 est la route de l'accueil et on met ce lien sur le logo
           du site et les index supérieurs à 4 sont les routes vers d'autres pages comme 
            la mention légale etc... qui ne seront pas dans ce menu */}
    if (index>0 && index<4)
    {
    return <li className="li_menu_head" key={any.id}><Link to={any.path}>{any.name}</Link></li>
   } else {
       return null
    }
    })
     
     return result ;
}

export default list;
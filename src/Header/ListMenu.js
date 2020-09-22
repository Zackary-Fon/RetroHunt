import React from 'react';
import {Link} from "react-router-dom";

const list = () =>{
    const tabMenu = [{id:0, name:"Connexion/inscription", path:"/ConnectionInscription"}, {id:1, name:"Profil", path:"/Profile"}]
    const result = tabMenu.map((any)=>
     <li id="li_menu_head" key={any.id}><Link to={any.path}>{any.name}</Link></li>);
     return result;
}

export default list;
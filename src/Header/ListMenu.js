import React from 'react';

const list = (index) =>{
    const tabMenu = ["Connexion/inscription", "Profil"]
    const result = tabMenu.map((any)=>
     <li id="li_menu_head" key={index}>{any}</li>);
     return result;
}

export default list;
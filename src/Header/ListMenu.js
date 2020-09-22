import React from 'react';

const list = () =>{
    const tabMenu = [{id:0, name:"Connexion/inscription"}, {id:1, name:"Profil"}]
    const result = tabMenu.map((any)=>
     <li id="li_menu_head" key={any.id}>{any.name}</li>);
     return result;
}

export default list;
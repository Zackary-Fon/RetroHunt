import React from 'react';
import {Link} from "react-router-dom";
import tabRoutes from "../Rooting/const";

const list = () =>{
    const result = tabRoutes.map((any, index)=>{
    if (index>0 && index<3)
    {
    return <li className="li_menu_head" key={any.id}><Link to={any.path}>{any.name}</Link></li>
   } else {
       return null
    }
    })
     
     return result ;
}

export default list;
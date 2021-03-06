import React, { useState } from 'react';
import {Link} from "react-router-dom";
import BigMenuItems from "./BigMenuItems";
import './BigMenu.css';

const BigMenuDropdown = ()=>{

    const titleGames = BigMenuItems.map((any, index)=> {
        if (index == 0 ){
            return (
                    <Link key={any.id} to={`/Categorie/${any.title}`}>{any.title}</Link>
            )
        }
    });

    const thirstColumn = BigMenuItems.map((any, index)=> {
        if (index > 0 && index < 12 ){
            return (
                    <Link key={any.id} to={`/Categorie/${any.title}`}>{any.title}</Link>
            )
        }
    });

    const titleConsoles = BigMenuItems.map((any, index)=> {
        if (index == 12 ){
            return (
                    <Link key={any.id} to={`/Categorie/${any.title}`}>{any.title}</Link>
            )
        }
    });

    

{/* <div className="column-dropdown" key={any.id}>
</div> */}

return (
    <>
        <div className="column-dropdown" >
            <h4>{titleGames}</h4>
            {thirstColumn}
        </div>
        
    </>
);
}


export default BigMenuDropdown;
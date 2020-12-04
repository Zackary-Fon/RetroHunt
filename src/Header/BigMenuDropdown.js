import React, { useState } from 'react';
import {Link} from "react-router-dom";
import BigMenuItems from "./BigMenuItems";
import './BigMenu.css';
import NavDropdown from "react-bootstrap/NavDropdown";

const BigMenuDropdown = ()=>{

    const titleGames = BigMenuItems.map((any, index)=> {
        if (index == 0 ){
            return (
                    <Link key={any.id} to={any.path}>{any.title}</Link>
            )
        }
    });

    const thirstColumn = BigMenuItems.map((any, index)=> {
        if (index > 0 && index < 12 ){
            return (
                    <Link key={any.id} to={any.path}>{any.title}</Link>
            )
        }
    });

    const titleConsoles = BigMenuItems.map((any, index)=> {
        if (index == 12 ){
            return (
                    <Link key={any.id} to={any.path}>{any.title}</Link>
            )
        }
    });

    const secondColumn = BigMenuItems.map((any, index)=> {
        if (index > 12 ){
            return (
                    <Link key={any.id} to={any.path}>{any.title}</Link>
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
        <div className="column-dropdown" >
            <h4>{titleConsoles}</h4>
            {secondColumn}
        </div>
    </>
);
}


export default BigMenuDropdown;
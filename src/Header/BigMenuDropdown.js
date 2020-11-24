import React, { useState } from 'react';
import {Link} from "react-router-dom";
import BigMenuItems from "./BigMenuItems";
import NavDropdown from "react-bootstrap/NavDropdown";

const BigMenuDropdown = ()=>{

const result = BigMenuItems.map((any, index)=> {
    if (index>=2){
        return (
            <li key={any.id}>
                <NavDropdown.Item to={any.path}>{any.title}</NavDropdown.Item>
            </li>
        )
    } else {
        return null
    }
});

return result;
}
export default BigMenuDropdown;
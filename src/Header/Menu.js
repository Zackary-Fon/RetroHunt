import React from 'react';
import './Header.css';
import list from './ListMenu'

const HeadMenu = () =>{

    return (
    <ul className="head_menu">{list()}</ul>
    )
}
export default HeadMenu;

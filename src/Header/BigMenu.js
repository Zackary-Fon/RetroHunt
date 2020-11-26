import React, { useState } from 'react';
import {Link} from "react-router-dom";
import BigMenuItems from "./BigMenuItems";
import './BigMenu.css';

const BigMenu = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div onClick={handleClick}
            className={click ? 'bigmenu-dropdown clicked' : 'bigmenu-dropdown'}>
                {BigMenuItems.map((item, index) => {
                        if(index==0){
                            return (
                                <li key={index}>
                                    <h2>
                                    <Link className={item.className} to={item.path} onClick={() => setClick(false)}>
                                        {item.title}
                                    </Link>
                                    </h2>
                                </li>
                            )
                        }

                        if (index>0 && index<5){
                            return (
                                <li key={index}>
                                    <Link className={item.className} to={item.path} onClick={() => setClick(false)}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        } 
                })}
            </div>
            <div onClick={handleClick}
            className={click ? 'bigmenu-dropdown2 clicked' : 'bigmenu-dropdown2'}>
            {BigMenuItems.map((item, index) => {
            if(index==5){
                            return (
                                <li key={index}>
                                    <h2>
                                    <Link className={item.className} to={item.path} onClick={() => setClick(false)}>
                                        {item.title}
                                    </Link>
                                    </h2>
                                </li>
                            )
                        }

                        if (index>5 && index<7){
                            return (
                                <li key={index}>
                                    <Link className={item.className} to={item.path} onClick={() => setClick(false)}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        } else {
                            return null
                        }
                    })}
            </div>
        </>
    )
};

export default BigMenu;
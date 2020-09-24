
import React from 'react';
import Logo from './Logo.png';
import {Link} from "react-router-dom";

const LogoFooter = ()=>{

    return (
    <Link to="/"> <div className="Logo"><img src={Logo} alt="Logo"/></div> </Link>
    )
}

export default LogoFooter;



import React from 'react';
import Logo from '../Images/logo_blanc.png';
import {Link} from "react-router-dom";

const LogoFooter = ()=>{

    return (
    <Link to="/"><img src={Logo} alt="Logo" className="Logo"/> </Link>
    )
}

export default LogoFooter;


import React from "react";
import Recent from "./Recent";
import './Home.css';

const Home = () => {

    return (
    <div className="homeBody">
        <div className="headBody"><h1>Bienvenue sur RetroHunt</h1></div>
        <Recent/>
        
    </div>);
}

export default Home;
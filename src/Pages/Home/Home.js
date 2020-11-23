import React,{useEffect} from "react";
import Recent from "./Recent";
import './Home.css';
/* import GetUser from './../../fetch.js'; */
import chevronGauche from "../../Images/chevronGauche.png";
import chevronDroite from "../../Images/chevronDroite.png";
import chevronHaut from "../../Images/chevronHaut.png";
import RecupPlay from "./Play"
const Home = () => {
     useEffect(() => {
        RecupPlay()
    },[])
        /*
        fetch(URL,{ method: "GET",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/user"
        }})
        .then(response => {
                response.json().then(json => {
                console.log(json);
            })
        }
    )
    },[]); */
/* GetUser(); */
    return (
    <div className="homeBody">
        <div className="headBody"><h1>Bienvenue sur RetroHunt</h1></div>
        <Recent/>
        <div className="pagination"><img src={chevronGauche}/><h1>1</h1><img src={chevronDroite}/></div>
    </div>);
}

export default Home;
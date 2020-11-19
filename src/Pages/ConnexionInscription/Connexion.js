import React,{useState,useEffect}  from "react";
import  fetchie from "./fetchConn";

const Connexion = () =>{
    useEffect(() => {
        fetchie()
       })
    return(
        <div>
            <input type="text" placeholder="Adresse Mail" id="email"></input>
            <input type="text" placeholder="Mot de passe" id="Password"></input>
            <a id="submit">Connexion</a>
        </div>
    )
}

export default Connexion;
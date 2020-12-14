import {Link} from "react-router-dom";
import React,{useEffect} from "react";
import { Button } from "react-bootstrap";

const modifProfil=()=>{
    useEffect( () => {
    });
    return (
        <div className="Card">
            <h3>Modifier votre profil</h3>
            <input type="text" id="nom"/>
            <input type="text" id="Prenom"/>
            <input type="text" id="email"/>
            <input type="file" name="image" id="image" 
            className="input-custom input-photo" 
            accept="image/png,image/jpg, image/jpeg" /> 
            <Button>Changer votre mot de passe</Button>
        </div>
    )
}

export default modifProfil
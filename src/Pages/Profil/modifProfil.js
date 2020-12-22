import {Link} from "react-router-dom";
import React,{useEffect} from "react";
import { Button } from "react-bootstrap";
import recmod from "./recupmodif"
import envoimod from "./envoiemodif"

const modifProfil=()=>{
    useEffect( () => {
    recmod() //fetch recup info a modifier
    envoimod() //feetch qui eenvoiee profil modifier a la bdd
    });
    return (
        <div className="Card">
            <Link to="/Profil"><i class="fas fa-chevron-left"></i> Retour</Link>
            <form id="myform">
            <h3>Modifier votre profil</h3>
            <label for="nom">Nom</label>
            <input type="text" name="nom" id="nom"/>
            <br></br>
            <label for="Prenom">Prenom</label>
            <input type="text" name="prenom" id="Prenom"/>
            <br></br>
            <label for="email">Email</label>
            <input type="text" name="email" id="email"/>
            <br></br>
            <label for="local">Localisation</label>
            <input type="text" name="localisation" id="Localisation"/>
            <br></br>
            <input type="hidden" id="user"/>
            <input type="hidden" id="password"/>
            <Button>Changer votre mot de passe</Button>
            <div id="submit">Modifier</div>
            </form>
        </div>
    )
}

export default modifProfil
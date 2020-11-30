import {Link} from "react-router-dom";
import React,{useEffect} from "react";
import fetcha from "./FetchProfile";

const Profil = () => {

    useEffect(()=>{
        fetcha()
    })
    return(
        <div className="Card">
            <div className="CardHeader">
                <h3>Retour</h3>
                <h2>Mon Profil</h2>
                <div>
                    <p>Modifier mon profil</p>
                    <p>Me déconnecter</p>
                    <Link to="/DeleteProfile"><p>Supprimer mon compte</p></Link>
                </div>
            </div>
            <div className="Infos">
            <p id="prenom"></p>
            <p id="nom"></p>
            <p id="email"></p>
            <img src="" alt="Photo Profil"></img>
            </div>
            <div className="Conversations">

                <p>Afficher plus</p>
            </div>
            <div className="Annonces">

                <p>Afficher plus</p>
            </div>
        </div>
    )
}

export default Profil;
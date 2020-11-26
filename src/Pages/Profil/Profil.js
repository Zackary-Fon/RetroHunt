import React from "react";
import {Link} from "react-router-dom";

const Profil = () => {

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
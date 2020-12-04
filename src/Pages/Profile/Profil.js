import "./Profil.css"
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
            <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
                <h2 className="title">Mon Profil</h2>
                <div className="modificationProfil">
                    <p>Modifier mon profil</p>
                    <Link to="/DeleteProfile" className="delete"><p>Supprimer mon compte</p></Link>
                </div>
            </div>
            <div className="Infos">
                <div id="avatar"></div>
                <div id="info">
            <p id="prenom"></p>
            <p id="nom"></p>
            <p id="email"></p>
            </div>
            </div>
            {/* <div className="Conversations">

                <p>Afficher plus</p>
            </div> */}
            <h2 className="TitreAnnonce">Mes annonces</h2>
            <div className="Annonces">
            
                
            </div>
            <Link>Afficher plus</Link>
        </div>
    )
}

export default Profil;
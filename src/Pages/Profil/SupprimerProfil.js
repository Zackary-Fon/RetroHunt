import React,{useEffect} from "react";
import recsup from "./recupsup"
import sup from "./FetchSupp"

const SuppProfil = () =>{
useEffect(()=>{
    recsup()
    sup()
})
    return(
        <div className="Card">
            <h3>Retour</h3>
            <h1>Etes vous sûr(e) de vouloir supprimer votre profil<p id="perso"></p>? <p id="mv"></p>  </h1>
            <button id="sup">Oui je suis sûr(e)</button>
        </div>
    )
}

export default SuppProfil;
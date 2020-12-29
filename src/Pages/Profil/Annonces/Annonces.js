import {Link} from "react-router-dom";
import React,{useEffect,useState} from "react";
import recup from "./recupP";

import delet from "./fetchsuppAnn";
import "../Profil.css";
import "../../Home/Home.css"

const Annonce = ({match}) => {
    const[data,setdata]=useState([])

    useEffect( () => {
        delet(); //supp annone
        const user={
            email: match.params.id
        }
        const jts=JSON.stringify(user)
        const conf={ method: "POST",
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Annonce"
            },
            body:jts};
        fetch("http://localhost:3006/Profil/Annonce",conf)
        .then(response => response.json().then((json) => {
                    setdata(json)
    }))
});

const {params:id } = match;
const Articles = data.map((produit)=>{
    return (
        <div key={produit._id} className="imageIntitule card card-custom">
                    <div className="imageProduit " > <div style={{background: `url(${produit.thumbnail[0]})`, backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"80%", height:"200px"}}></div> </div>
                    <div className="intituleAnnonce card-body">
                            <h1 className="card-title">{produit.Titre}</h1>
                            <ul className="list-group list-group-flush">
                                <li class="list-group-item"><p> {produit.Console}</p></li>
                                <li class="list-group-item"><p> {produit.Prix} €</p></li>
                            </ul>
                            
            <Link to={`/ModifAnn/${produit._id}`}><div className="bouton">Modifier Annonce</div></Link>
            <button className="del" value={produit._id}>Supprimer l'annonce</button>
                        <div className="button_custom-width"><Link to={`/Product/${produit._id}`} className="bouton btn btn-primary">Voir la fiche</Link></div>
    
                    </div>
                </div>
           
    )
})
return (
    <div className="bodyRecent" >
        <Link to="/Profil"><i class="fas fa-chevron-left"></i> Retour</Link>
        <ul className="listArticles">{Articles}</ul>
    </div>

)
}
export default Annonce;
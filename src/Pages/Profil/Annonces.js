import {Link} from "react-router-dom";
import React,{useEffect,useState} from "react";
import recup from "./recupP";
import delet from "./fetchsuppAnn";
import "./Profil.css";
    
const Rec=[];

const Annonce = ({match}) => {
    
const[data,setdata]=useState([])

useEffect( () => {
    delet();
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
console.log(data)
const {params:id } = match;
const Articles = data.map((produit)=>{
    return (
        <li key={produit._id} className="imageIntitule">
            <img src={produit.thumbnail[0]}/>
            <div className="intituleAnnonce">
                <h1>{produit.Titre}</h1>
            </div>   
                <h4>prix : {produit.Prix}</h4>
            <Link to={`/Product/${produit._id}`}><div className="bouton">Voir la fiche</div></Link>
            <Link to={`/ModifAnn/${produit._id}`}><div className="bouton">Modifier Annonce</div></Link>
            <button className="del" value={produit._id}>Supprimer l'annonce</button>
            
        </li>
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
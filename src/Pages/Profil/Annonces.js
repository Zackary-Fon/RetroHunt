import {Link} from "react-router-dom";
import React,{useEffect,useState} from "react";
import recup from "./recupP";

       
const Rec=[];

const Annonce = ({match}) => {
    function delet(){
        const modif={
            email:match.params.id
            
        }
        const js=JSON.stringify(modif)
    const config={method: "POST",
    headers: {
        "Accept": "application/json", //j'accepte de recevoir du json
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3006/delete/annonce"
    },body:js}
    fetch(URL, config) //instannciation
        .then(response => response.json().then((response)=>{
    console.log(response)
        }))
    }
const[data,setdata]=useState([])
useEffect(async () => {
    delet()
        const user={
            email: match.params.id
        }
const js=JSON.stringify(user)
    fetch("http://localhost:3006/Profil/Annonce",{ method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Annonce"
    },body:js})
    .then(response => {response.json().then(json => {
        const taille=(json.length -1);
        let Recent=taille-5;
           
            
        setdata([json]);
    })})
});
console.log(data)
const {params:id } = match;
console.log(match)
const Articles = data.map((produit)=>{
    return (
        <li key={produit._id} className="imageIntitule">
            <img src={produit.thumbnail[0]}/>
            <div className="intituleAnnonce">
                <h1>{produit.Titre}</h1>
               
                <h4>prix : {produit.Prix}</h4>
            <Link to={`/Product/${produit._id}`}><div className="bouton">Voir la fiche</div></Link>
            <div onCLick={delet} id="delete"><div className="bouton">Supprimer l'annonce</div></div>
            </div>
        </li>
    )
})
return (
    <div className="bodyRecent" >
        <ul className="listArticles">{Articles}</ul>
    </div>

)
}
export default Annonce;
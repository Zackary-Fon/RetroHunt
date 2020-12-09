import {Link} from "react-router-dom";
import React,{useEffect,useState} from "react";
import recup from "./recupP";

       
const Rec=[];

const Annonce = ({match}) => {
    
const[data,setdata]=useState([])

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
                    },
                    body:js}
    fetch("http://localhost:3006/delete/annonce", config) 
        .then(response => response.json().then((response)=>{
    console.log(response)
        }))
    }




useEffect(async () => {
    //delet();
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
            <button onCLick={delet} className="bouton">Supprimer l'annonce</button>
            
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
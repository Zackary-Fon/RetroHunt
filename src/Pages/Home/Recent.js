import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";

import '../../general.css';
import './Home.css';
import person from '../../Rooting/Icones/person.svg';
//liste des articles mis en ligne, affichés sous forme de cards avec l'image puis en dessous
//de l'image les informations telles que le titre du produit, la console, l'utilisateur qui
//a posté l'annonce et la date à laquelle celle ci a été postée et un bouton pour voir la fiche
const Rec=[];

const Recent = () => {
    const[data,setdata]=useState([])

    useEffect(async () => {
        fetch("https://apiretrohunt.herokuapp.com/all",{ method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"https://apiretrohunt.herokuapp.com/all"
        }}) //recup de toutes les annonces
        .then(response => {response.json().then(json => {
            const taille=(json.length -1); //definition de la taille
            let Recent=taille-5;//definition du depart dès la 6e en partant de la fin
            for(let i=1;i<=6;i++){ //boucle pour la recup des 6 deernieres
                Rec.push(json[Recent]) //je met dans mon tableau l'annonce Recent
                Recent++; //j increment recent
                }
            setdata(Rec); //je met rec dans data
        })})
    });
    
    const Articles = data.map((produit)=>{ //pour chaque annonce je crée une card
        return (
            <div key={produit._id} className="imageIntitule card card-custom">
                <div className="imageProduit " > <div style={{background: `url(${produit.thumbnail[0]})`, backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"80%", height:"200px"}}></div> </div>
                <div className="intituleAnnonce card-body">
                        <h1 className="card-title">{produit.Titre}</h1>
                        <ul className="list-group list-group-flush">
                            <li class="list-group-item"><p> {produit.Console}</p></li>
                            <li class="list-group-item"><p> {produit.Prix} €</p></li>
                            <li class="list-group-item"><p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.PseudoVendeur}</p></li>
                        </ul>

                    <div className="button_custom-width"><Link to={`/Product/${produit._id}`} className="bouton btn btn-primary">Voir la fiche</Link></div>

                </div>
            </div>
        )
    })
    return (
        <div className="bodyRecent" >
            <ul className="listArticles">{Articles}</ul>
        </div>

    )
}
export default Recent;
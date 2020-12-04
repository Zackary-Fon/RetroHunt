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
        fetch("http://localhost:3006/all",{ method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/all"
        }})
        .then(response => {response.json().then(json => {
            const taille=(json.length -1);
            let Recent=taille-6;
            for(let i=0;i<6;i++){
                Rec.push(json[Recent])
                Recent++;
                }
            setdata(Rec);
        })})
    });
    console.log(data)
    const Articles = data.map((produit)=>{
        return (
            <li key={produit._id} className="imageIntitule">
                <div className="imageProduit" style={{background: `url(${produit.image[0]})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width:"100%", height:"200px"}}/>
                <div className="intituleAnnonce">
                    <h1>{produit.Titre}</h1>
                    <h3>console: {produit.Console}</h3>
                    <p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.PseudoVendeur}</p>
                    <h4>prix : {produit.Prix}</h4>
                    <Link to={`/Product/${produit._id}`}><div className="bouton">Voir la fiche</div></Link>
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
export default Recent;
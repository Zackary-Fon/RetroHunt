import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ObjectProduct} from "../../Rooting/const"
import '../../general.css';
import './Home.css';
import person from '../../Rooting/Icones/person.svg';
 import RecupPlay from "./Play" 
import { json } from "body-parser";
import {tab} from './Play';
//liste des articles mis en ligne, affichés sous forme de cards avec l'image puis en dessous
//de l'image les informations telles que le titre du produit, la console, l'utilisateur qui
//a posté l'annonce et la date à laquelle celle ci a été postée et un bouton pour voir la fiche


const Recent = () => {
    const Articles = tab.map((produit)=>{
        return (
            <li key={produit.id} className="imageIntitule">
                <div className="imageProduit" style={{background: `url(${produit.image[0]})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width:"100%", height:"200px"}}/>
                <div className="intituleAnnonce">
                    <h1>{produit.Titre}</h1>
                    <h3>console: {produit.Console}</h3>
                    <p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.PseudoVendeur}</p>
                    <h4>prix : {produit.Prix}</h4>
                <Link to={`/Product/${produit.id}`}><div className="bouton">Voir la fiche</div></Link>
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
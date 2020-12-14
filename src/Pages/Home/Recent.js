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
            let Recent=taille-5;
            for(let i=1;i<=6;i++){
                Rec.push(json[Recent])
                Recent++;
                }
            setdata(Rec);
        })})
    });
    console.log(data)
    const Articles = data.map((produit)=>{
        return (
            <div key={produit._id} className="imageIntitule card card-custom">
                <div className="imageProduit " style={{background: `url(${produit.image[0]})`, backgroundPosition:"center", backgroundSize:"cover", width:"100%", height:"180px"}}/>
                {/* <img className="imageProduit card-img-top" src="url(${produit.image[0]})" alt="Card image cap" ></img> */}
                <div className="intituleAnnonce card-body">
                    <h1 className="card-title">{produit.Titre}</h1>
                    <ul className="list-group list-group-flush">
                        <li class="list-group-item"><h3>console: {produit.Console}</h3></li>
                        <li class="list-group-item"><p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.PseudoVendeur}</p></li>
                        <li class="list-group-item"><h4>prix : {produit.Prix}</h4></li>
                    </ul>
                    
                    
                    
                <Link to={`/Product/${produit._id}`}><div className="bouton btn btn-primary">Voir la fiche</div></Link>
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
import React,{useEffect,useState} from "react";
import '../../../general.css';
import {Link} from "react-router-dom";
import fetche from "./fetchmodif"
import recModAnn from "./recupmodifAnn"

const ModifAnnonce = ({match}) => {

    useEffect( () => {
        fetche()
        recModAnn()
        const user={
            _id:match.params.id
        };
        console.log(user)
        const formjs=JSON.stringify(user)
         fetch("http://localhost:3006/id",{ method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/id"
        },body:formjs
                })
        .then(response => {response.json().then(json => {
            console.log(json)
            const Titre=document.getElementById('titre');
            const Prix=document.getElementById('Prix');
            const Etat=document.getElementById('etat');
            const Console=document.getElementById('console');
            const Date=document.getElementById('Année');
            const Desc=document.getElementById('description');
            Titre.value=json[0].Titre;
            Prix.value=json[0].Prix;
            Etat.value=json[0].Etat;
            Console.value=json[0].Console;
            Date.value=json[0].Date;
            Desc.value=json[0].Description;
            document.getElementById('ID').value=json[0]._id;
            console.log(json[0].image)
            document.getElementById('img').src=json[0].image[0];
        })})
    });
   
    return (<div>
         <div className="bodyProduct">
            <div className="back_btn"><Link to="/Profil"><i class="fas fa-chevron-left"></i> Retour</Link></div>
                <div className="Images">
                    <input type="text" id="titre"></input>
                                <img className="imageP" id="img" alt="produit"/>
                            </div>
                        <div className="Description">
                            <div className="Infos">
                                <input type="text" id="Prix"></input>
                                <input type="text" id="Année"></input>
                                <input type="text" id="etat"></input>
                                <input type="text" id="console"></input>
                                <input type="text" id="description"></input>
                                <input type="hidden" id="pseudo"></input>
                                <input type="hidden" id="ID"></input>
                                <input type="hidden" id="email"></input>
                            </div>
                            
                        </div>
                        <div id="contact">
                        <a className="bn" id="envoi">Modifier l'annonce</a>
                        </div>
                    </div>
        
    </div>)
}

export default ModifAnnonce;
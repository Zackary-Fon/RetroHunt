import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/deposer";

const Ajout=()=>{

    document.getElementById("submit").addEventListener('click',()=>{  //ecoute du bouton d envoie de formulaire
        const Annonce={ //creation d'une constante avec donnée utile
          TitreAnnonce: document.querySelector("#titreAnnonce").value, //recuperation des données utiles
          Console: document.querySelector("#console").value,
          Date: document.querySelector("#date").value,
          Prix: document.querySelector("#Prix").value,
          Etat: document.querySelector("#etat").value,
          description: document.querySelector("#description").value
        }
        
      const Formjson=JSON.stringify(Annonce); // transformation de ma variable en string pour la bdd
      
      const config = { // options d'envoie de la fetch
          method: 'POST',
          headers: {
          "Accept": "application/json",   //accept du json
          "Content-Type": "application/json",  //contien du json
          "Access-Control-Allow-Origin":"http://localhost:3006/deposer" // autorise l acces a l url du back
          },
          body: Formjson, // enregistrement des données dans le body envoyer
        }
      fetch(URL, config)  //mise en place de la fetch
        .then(response => {  
            response.json().then(json => {// quand j ai une reponse alors j affiche dans la console le json envoyé
                console.log(json)
            }
            )})
    })
        
}


export default Ajout ; 

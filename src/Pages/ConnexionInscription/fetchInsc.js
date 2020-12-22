import React,{useState,useEffect} from "react";
/* import form from "./Inscription";
 */
const URL="http://localhost:3006/user"; //URL back


const fetchie=()=>{ //declaration de la fonction qui va etre appeler dans inscription
  document.getElementById("submit").addEventListener('click',()=>{  //ecoute du bouton d envoie de formulaire
    const user={ //creation d'une constante avec donnée utile
    Nom: document.querySelector("#Nom").value, //recuperation des données utiles
    email: document.querySelector("#email").value,
    Prenom: document.querySelector("#Prenom").value,
    Password: document.querySelector("#Password").value
    }
    
    const Formjson=JSON.stringify(user); // transformation de ma variable en string pour la bdd
    
    const config = { // options d'envoie de la fetch
      method: 'POST',
      headers: {
              "Accept": "application/json",   //accept du json
              "Content-Type": "application/json",  //contien du json
              "Access-Control-Allow-Origin":"http://localhost:3006/user" // autorise l acces a l url du back
              },
      body: Formjson, // enregistrement des données dans le body envoyer
      }
    fetch(URL, config)  //mise en place de la fetch
    .then(response => {  
      response.json().then(json => {// quand j ai une reponse alors j affiche dans la console le json envoyé
        if (json == "L'utilisateur existe déjà"){
          document.getElementById('error').innerHTML=json;
        }
        if (json == "ce n est pas des données possible"){
          document.getElementById('error').innerHTML=json;
        } 
        if (json == "vide"){
          document.getElementById('error').innerHTML=json;
          }
        else if(json=="Ok"){
          document.getElementById('error').style.style="none";
          document.location.href="/ConnexionInscription"
        }
  })})
  
})

  window.addEventListener("keydown", (eve)=> {//evenement A  la touche entrer
    const sub=document.getElementById('submit');
      if (eve.key=="Enter" && sub.disabled ==false ){
        const user={ //creation d'une constante avec donnée utile
          Nom: document.querySelector("#Nom").value, //recuperation des données utiles
          email: document.querySelector("#email").value,
          Prenom: document.querySelector("#Prenom").value,
          Password: document.querySelector("#Password").value
        }
        
        const Formjson=JSON.stringify(user); // transformation de ma variable en string pour la bdd

        const config = { // options d'envoie de la fetch
          method: 'POST',
          headers: {
                    "Accept": "application/json",   //accept du json
                    "Content-Type": "application/json",  //contien du json
                    "Access-Control-Allow-Origin":"http://localhost:3006/user" // autorise l acces a l url du back
                    },
          body: Formjson, // enregistrement des données dans le body envoyer
        }
        fetch(URL, config)  //mise en place de la fetch
        .then(response => {  
          response.json().then(json => {// quand j ai une reponse alors j affiche dans la console le json envoyé
            if (json == "L'utilisateur existe déjà"){
              document.getElementById('error').innerHTML=json;
            }
            if (json == "ce n est pas des données possible"){
              document.getElementById('error').innerHTML=json;
            } 
            if (json == "vide"){
              document.getElementById('error').innerHTML=json;
            }
            else if(json=="Ok"){
              document.getElementById('error').style.style="none";
              document.location.href="/ConnexionInscription"
            }
        })})
        
      }
  })

}

export default fetchie; 
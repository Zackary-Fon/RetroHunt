import React,{useState,useEffect} from "react"; 
/* import form from "./Inscription";
 */
const URL="http://localhost:3006/login";  //url da la route de la requete en back


const fetchie=()=>{ //instancier le js en react
  document.getElementById("submit").addEventListener('click',()=>{ //evenement au click sur le bouton 
  const user={   // creation d un objet avec mes données a envoyer
    email: document.querySelector("#email").value, //email-> req.body.email
    Password: document.querySelector("#Password").value //attention a nommer comme en back
  }

const Formjson=JSON.stringify(user); // Transformation en String

const config = { //configuration fetch
    method: 'POST', //envoyer
    headers: {  //autorisation
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json", //j'envoie du json
    "Access-Control-Allow-Origin":"http://localhost:3006/login", //j autorise a aller sur mon back
    },
    body: Formjson,// j'envoie dans le back body ==req.body
  } 
  
fetch(URL, config) //instancier la fetch
  .then(response => { //après que la fetch est faite je fais :
    response.json().then(json => { //transformation de la reponse en json
        if (json=="mauvais"){ //gestion erreur
          console.log("wrong password")
        }
        if (json=="not found"){
            console.log("User not found")
        }
        if(json==undefined)
        {console.log('pb')}
        else{
      const token=json.accessToken;
      console.log(token)
      localStorage.setItem("Token",json.accessToken)
      console.log(localStorage.Token)
      document.location.href="/Profil"
        }
  })})
 
}) 

}

export default fetchie;
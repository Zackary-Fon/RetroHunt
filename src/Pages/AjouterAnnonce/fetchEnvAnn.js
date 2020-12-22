import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/deposer";

const Ajout=()=>{
  console.log(document.querySelector('#image'))  
    document.getElementById("submit").addEventListener('click',()=>{  
        let form = document.getElementById("myForm"); //recup du form
        
        let formData = new FormData(form); //transformation du form en form data
        const config = { // options d'envoie de la fetch
          method: 'POST',
          headers: {
          "Access-Control-Allow-Origin":"http://localhost:3006/deposer" // autorise l acces a l url du back
          },
          body: formData, // enregistrement des données dans le body envoyer
        }
      fetch(URL, config)  //mise en place de la fetch
        .then(response => {  
            response.json().then(json => {// quand j ai une reponse alors j affiche dans la console le json envoyé
              console.log(json)
            }
          )
        })
        })
    
        
}


export default Ajout ; 

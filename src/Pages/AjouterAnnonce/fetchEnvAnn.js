import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/deposer";

const Ajout=()=>{
  console.log(document.querySelector('#image'))  
    document.getElementById("submit").addEventListener('click',()=>{  //ecoute du bouton d envoie de formulaire
            /* const Annonce={ //creation d'une constante avec donnée utile1
          TitreAnnonce: document.querySelector("#titreAnnonce").value, //recuperation des données utiles
          Console: document.querySelector("#console").value,
          image:document.querySelector('#image').value, 
          Date: document.querySelector("#date").value,
          Prix: document.querySelector("#Prix").value,
          Etat: document.querySelector("#etat").value,
          description: document.querySelector("#description").value
        }
         */
        let form = document.getElementById("myForm");
        let formData = new FormData(form);
      /* const Formjson=JSON.stringify(Annonce); */ // transformation de ma variable en string pour la bdd
      
      const config = { // options d'envoie de la fetch
          method: 'POST',
          headers: {
           //accept du json
            //contien du json
          "Access-Control-Allow-Origin":"http://localhost:3006/deposer" // autorise l acces a l url du back
          },
          body: formData, // enregistrement des données dans le body envoyer
        }
      fetch(URL, config)  //mise en place de la fetch
        .then(response => {  
            response.json().then(json => {// quand j ai une reponse alors j affiche dans la console le json envoyé
              if(json=="OK"){
                console.log("OK")
                document.location.href="../"
              } if(json=="error"){
                console.log('probleme')
              }
            }
            )})
    })
        
}


export default Ajout ; 

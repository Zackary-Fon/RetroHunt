import React,{useState,useEffect} from "react";
/* import form from "./Inscription";
 */
const URL="http://localhost:3006/login";


const fetchie=()=>{
  console.log("fetchConnexion")
  document.getElementById("submit").addEventListener('click',()=>{
  const user={
    email: document.querySelector("#email").value,
    Password: document.querySelector("#Password").value
  }

const Formjson=JSON.stringify(user);
console.log(user)
console.log('ENVOIE: '+Formjson)

const config = {
    method: 'POST',
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"http://localhost:3006/login",
    
    },
    body: Formjson,
  }
  
fetch(URL, config)
  .then(response => {
    response.json().then(json => {
        if (json=="mauvais"){
          console.log("wrong password")
        }
        if (json=="not found"){
            console.log("User not found")
        }
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
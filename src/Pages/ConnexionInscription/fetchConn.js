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
    "Access-Control-Allow-Origin":"http://localhost:3006/user",
    
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
      const token="Bearer "+json.accessToken;
      console.log(token)
fetch(URL, {
  headers:{
    "Authorization": token,
    "Access-Control-Allow-Origin":"http://localhost:3006/user",
  }
}).then(document.location.href="/")
        }
  })})
 
}) 

}

export default fetchie;
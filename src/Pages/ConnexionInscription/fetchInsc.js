import React,{useState,useEffect} from "react";
/* import form from "./Inscription";
 */
const URL="http://localhost:3006/user";


const fetchie=()=>{
  console.log("fetch")
 document.getElementById("submit").addEventListener('click',()=>{
  const user={
    Nom: document.querySelector("#Nom").value,
    email: document.querySelector("#email").value,
    Prenom: document.querySelector("#Prenom").value,
    Password: document.querySelector("#Password").value}
const Formjson=JSON.stringify(user);
console.log(user)
console.log('ENVOIE: '+Formjson)
const config = {
    method: 'POST',
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"http://localhost:3006/user"
    },
    body: Formjson,
  }
  ///ça merde ici ( sa envoie pas les données stringifier au back )

fetch(URL, config)
  .then(response => {
    response.json().then(json => {
      console.log(json);
  })})
}) }

export default fetchie;
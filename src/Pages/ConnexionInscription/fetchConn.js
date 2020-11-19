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
    "Access-Control-Allow-Origin":"http://localhost:3006/user"
    },
    body: Formjson,
  }
  
fetch(URL, config)
  .then(response => {
    response.json().then(json => {
        if (response==403){
            return(<h1>WRONG PASSWORD</h1>)
        }
        if (response==401){
            return(<h1>User not find</h1>)
        }
        else{
      console.log(json)
    document.location.href="/Profile"
    }
  })})
 
}) 

}

export default fetchie;
import react from "react"
const URL="http://localhost:3006/delete"

const supp=()=>{
const btn=document.querySelector('#sup');
btn.addEventListener('click',()=>{
const user={
  email: document.querySelector("#mv").innerHTML
}

const Formjson=JSON.stringify(user);
console.log(user)
console.log('ENVOIE: '+Formjson)

const config = {
  method: 'POST',
  headers: {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin":"http://localhost:3006/delete",
  
  },
  body: Formjson,
}

fetch(URL, config)
.then(response => {
  response.json().then(json => {
      if (json=="Deleted"){
        localStorage.removeItem('Token')
        document.location.href="../"
      }
})})

}) 
}

export default supp
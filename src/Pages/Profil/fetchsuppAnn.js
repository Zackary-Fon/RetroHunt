import react from "react"
const URL='http://localhost:3006/delete/annonce'

const fetchy=()=>{
    console.log('slip')
    const modif={
        Titre:document.getElementById('titre').value,
        Console:document.getElementById('Console').value,
        Etat: document.getElementById('Etat').value,
        Prix: document.getElementById('Prix').value,
        PseudoVendeur: document.getElementById('PseudoVendeur').value,
        _id:document.getElementById('ID').value
    }
    const js=JSON.stringify(modif)
const config={method: "POST",
headers: {
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"http://localhost:3006/delete/annonce"
},body:js}
fetch(URL, config) //instannciation
    .then(response => response.json().then((response)=>{
console.log(response)
    }))

    }
export default fetchy;
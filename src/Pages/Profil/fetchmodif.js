import react from "react"
const URL='http://localhost:3006/Update'

const fetche=()=>{
    console.log(document.getElementById('envoi'))
    document.getElementById('envoi').addEventListener('click',()=>{

    console.log('ta mere')
    const modif={
        Titre:document.getElementById('titre').value,
        Console:document.getElementById('console').value,
        Etat: document.getElementById('etat').value,
        Prix: document.getElementById('Prix').value,
        Description:document.getElementById('description').value,
        Date:document.getElementById('Année').value,
        _id:document.getElementById('ID').value
    }
    const js=JSON.stringify(modif)
const config={method: "POST",
headers: {
    "Accept": "application/json", //j'accepte de recevoir du json
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":"http://localhost:3006/Update"
},body:js}
fetch(URL, config) //instannciation
    .then(response => response.json().then((response)=>{
console.log(response)
    }))
})
    }
export default fetche
import react from "react"
const URL='https://apiretrohunt.herokuapp.com/Update'

const fetche=()=>{  //Envoi annonce modifier a la bdd
    document.getElementById('envoi').addEventListener('click',()=>{
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
                "Access-Control-Allow-Origin":"https://apiretrohunt.herokuapp.com/Update"
            },body:js}
        fetch(URL, config) 
        .then(response => response.json().then((response)=>{
            console.log(response)
    }))
})
    }
export default fetche
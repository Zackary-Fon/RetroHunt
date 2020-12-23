import react from "react"
const URL='https://apiretrohunt.herokuapp.com/delete/annonce'

const delet=()=>{ //fetch qui supprime une annonce
    const del=document.querySelectorAll('.del');
    del.forEach((element)=> {
        element.addEventListener('click',()=>{
        const modif={
            id:element.value
        }
        const js=JSON.stringify(modif)
    const config={method: "POST",
                    headers: {
                    "Accept": "application/json", //j'accepte de recevoir du json
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"https://apiretrohunt.herokuapp.com/delete/annonce"
                    },
                    body:js}
     fetch("https://apiretrohunt.herokuapp.com/delete/annonce", config) 
        .then(response => response.json().then((json)=>{
            if(json =="deleted"){
                document.location.href="/Profil"
            }
        }))
    } 
    
)})
}

export default delet
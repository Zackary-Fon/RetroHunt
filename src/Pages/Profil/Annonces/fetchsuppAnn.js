import react from "react"
const URL='http://localhost:3006/delete/annonce'

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
                    "Access-Control-Allow-Origin":"http://localhost:3006/delete/annonce"
                    },
                    body:js}
     fetch("http://localhost:3006/delete/annonce", config) 
        .then(response => response.json().then((json)=>{
            if(json =="deleted"){
                document.location.href="/Profil"
            }
        }))
    } 
    
)})
}

export default delet
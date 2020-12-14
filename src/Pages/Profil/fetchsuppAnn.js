import react from "react"
const URL='http://localhost:3006/delete/annonce'

const delet=()=>{
    
    console.log("TEST SUPP")
    const del=document.querySelectorAll('.del');
    del.forEach((element)=> {
        element.addEventListener('click',()=>{
        console.log("TEST SUPP2")
        const modif={
            id:element.value
        }
        console.log(modif)
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
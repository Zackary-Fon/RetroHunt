import react from "react"

const env=()=>{
    document.getElementById('envoi_message').addEventListener('click',()=>{ //efetch nvoie conv comme pour chat mais pour conversations
        const ladate= new Date();
        const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
        const Conv={
            envoyeur:document.getElementById('envoyeur').value,
            receveur:document.getElementById('Receveur').value,
            Titre:document.getElementById('titre').innerHTML,
            IdAnn:document.getElementById('idAnn').value,
            Message:[{message:document.getElementById('message').value,
            aEnvoye:document.getElementById('Receveur').value}]
        }
        const jsConv=JSON.stringify(Conv);
        
const conf={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/message/new"
},
body:jsConv};
fetch("http://localhost:3006/message/new",conf)
.then(response => response.json().then((json) => {
console.log(json)
 if(json ==="deja une conv"){
   console.log('mess')


}
else{
//document.location.href='/Profil'
console.log('ok')

} 
})

)
})

}

export default env
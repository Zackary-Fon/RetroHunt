import react from "react"

const convers=()=>{
    document.getElementById('envoi_message').addEventListener('click',()=>{
        const ladate= new Date();
        const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
        const Conv={
            envoyeur:document.getElementById('envoyeur').value,
            receveur:document.getElementById('Receveur').value,
            Titre:document.getElementById('titre').innerHTML,
            IdAnn:document.getElementById('idAnn').value,
            Message:[{message:document.getElementById('message').value,aEnvoye:document.getElementById('envoyeur').value,
        Date:date}]
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

   document.location.href='/Chat'+document.getElementById('idAnn').value;


}
else{
document.location.href='/Chat/'+document.getElementById('idAnn').value;
console.log('ok')

} 
})

)
})

window.addEventListener("keydown", (eve)=> {
    if (eve.key=="Enter"  ){
    const ladate= new Date();
    const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
    const Conv={
        envoyeur:document.getElementById('envoyeur').value,
        receveur:document.getElementById('Receveur').value,
        Titre:document.getElementById('titre').innerHTML,
        IdAnn:document.getElementById('idAnn').value,
        token:document.getElementById('token').value,
        Message:[{message:document.getElementById('message').value,aEnvoye:document.getElementById('envoyeur').value,
    Date:date}]
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

document.location.href='/Chat'+document.getElementById('idAnn').value;


}
else{
document.location.href='/Chat/'+document.getElementById('idAnn').value;
console.log('ok')

} 
})

)}
})
}

export default convers
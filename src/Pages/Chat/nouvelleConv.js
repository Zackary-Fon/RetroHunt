import react from "react"

const convers=()=>{
    document.getElementById('envoi_message').addEventListener('click',()=>{
        const ladate= new Date();;
        const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
        const Conv={
            envoyeur:document.getElementById('envoyeur').value,
            receveur:document.getElementById('Receveur').value,
            Titre:document.getElementById('titre').innerHTML,
            Message:[{message:document.getElementById('message').value,
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
const mess={
  Titre:document.getElementById('titre').innerHTML,
    receveur:document.getElementById('Receveur').value,
    envoyeur:document.getElementById('envoyeur').value,
    message:document.getElementById('message').value,
Date:date}
  const jsmess=JSON.stringify(mess)
console.log(jsmess)

  const config={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/message"
},
body:jsmess};
fetch("http://localhost:3006/message",config)
.then(response => response.json().then((json) => {
    if(json=="OK"){
      document.location.href='/Profil'
    }
    else{
      console.log(json)
    }
}))



}
else{
document.location.href='/Profil'


} 
})

)
})
}

export default convers
<<<<<<< HEAD
<<<<<<< Updated upstream
import React from "react";

const Chat = () =>{
    
}
=======
import React,{useEffect,useState} from "react";
import "./Chat.css"
import Info from "./recupinfo"
import mess from "./recupmess"
import convers from './nouvelleConv'
const Chat = ({match}) =>{
=======
import React,{useEffect,useState} from "react";
import "./Chat.css"
import Info from "./recupinfo"
import mess from "./recupmess"

const Chat = ({match}) =>{
    console.log(match.params.id)
>>>>>>> master
    const[data,setdata]=useState([])

useEffect(()=>{
    Info()
    mess()
<<<<<<< HEAD
    convers()
const idAnn=match.params.id;
const rec={_id:idAnn};
const jsrec=JSON.stringify(rec)

   
const con={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/id"
},
body:jsrec};
fetch("http://localhost:3006/id",con)
.then(response => response.json().then((json) => {
console.log(json)
const titre=document.getElementById('titre');
const receveur=document.getElementById('Receveur');
receveur.value=json[0].MailVendeur
titre.innerHTML=json[0].Titre;
}))

})


=======
    document.getElementById('envoi_message').addEventListener('click',()=>{
        const ladate= new Date();;
        const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
        const Conv={
            receveur:match.params.id,
            envoyeur:document.getElementById('envoyeur').value,
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
 if(json =="deja une conv"){
const mess={
    receveur:match.params.id,
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
    console.log(json)
}))



}
else{
document.location.href='/Profil'
} 
})

)
    })
   
}) 
>>>>>>> master

    return(
    <div className="chat">
        <div>
<<<<<<< HEAD
            <h3 id="titre"></h3>
            <input type="hidden" id="Receveur"></input>
=======
            <h3 id="Receveur">{match.params.id}</h3>
>>>>>>> master
            <input type="hidden" id="envoyeur"></input>
        </div>
        <ul id="zone_chat">
            <input value="Voir les messages" id="conv"></input>
            </ul>
        <form action="/" method="post" className="envoi">
            <input type="text" name="message" id="message" placeholder="Votre message..." size="50" autofocus />
            <input  id="envoi_message" value="Envoyer" />
        </form>

     
    </div>
    )
}

<<<<<<< HEAD
export default Chat
>>>>>>> Stashed changes
=======
export default Chat
>>>>>>> master

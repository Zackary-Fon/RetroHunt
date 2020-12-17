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
    const[data,setdata]=useState([])

useEffect(()=>{
    Info()
    mess()
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



    return(
    <div className="chat">
        <div>
            <h3 id="titre"></h3>
            <input type="hidden" id="Receveur"></input>
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

export default Chat
>>>>>>> Stashed changes

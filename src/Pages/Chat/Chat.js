import React,{useEffect,useState} from "react";
import "./Chat.css"
import Info from "./recupinfo"


const Chat = ({match}) =>{
    console.log(match.params.id)
    const[data,setdata]=useState([])

useEffect(()=>{
    Info()
    const Conv={
        receveur:match.params.id,
        envoyeur:document.getElementById('envoyeur').value
    }
    const jsConv=JSON.stringify(Conv);
    
const conf={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/message/find"
},
body:jsConv};
fetch("http://localhost:3006/message/find",conf)
.then(response => response.json().then((json) => {
console.log(json)
setdata(json.Message)
}))
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
const {params:id } = match;
const Messages = data.map((produit)=>{
    return (
        <li key={produit._id} className="imageIntitule">
             
                <h4> {produit.message}</h4>
                
                <h4> {produit.Date}</h4>
        </li>
    )
})

    return(
    <div className="chat">
        <div>
            <h3 id="Receveur "> {match.params.id}</h3>
            <input type="hidden" id="envoyeur"></input>
        </div>
        <ul id="zone_chat">
            {Messages}
            </ul>
        <form action="/" method="post" className="envoi">
            <input type="text" name="message" id="message" placeholder="Votre message..." size="50" autofocus />
            <input  id="envoi_message" value="Envoyer" />
        </form>

     
    </div>
    )
}

export default Chat
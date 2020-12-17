
import React,{useEffect,useState} from "react";
import "./Chat.css"
import Info from "./recupinfo"
import mess from "./recupmess"
import convers from './nouvelleConv'
const Chat = ({match}) =>{
    const[data,setdata]=useState([])

    useEffect(()=>{
        Info()
        convers()
        const idAnn=match.params.id;
        const ann=document.getElementById('idAnn');
        ann.value=idAnn;
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
            const titre=document.getElementById('titre');
            const receveur=document.getElementById('Receveur');
            receveur.value=json[0].MailVendeur
            titre.innerHTML=json[0].Titre;
            const local={
                token: sessionStorage.Token
            }
        
            const loc=sessionStorage;
            console.log(loc)
            if (loc.length <1 && loc.Token == undefined){
                document.location.href="/ConnexionInscription"
            } else{
                console.log(local)
                const bb = JSON.stringify(local);
                const confi = {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3006/auth",
                    },
                    body: bb
                }
                
                fetch("http://localhost:3006/auth", confi)
                    .then(response => {
                    response.json().then(json => {
                        console.log(json)
                        document.getElementById('envoyeur').value=json[0].email;
                        const conv={
                            receveur: receveur.value,
                            envoyeur: document.getElementById('envoyeur').value,
                            Titre:document.getElementById('titre').innerHTML,
                        }
                        const Jsconv = JSON.stringify(conv)
        
                        const config={ method: "POST",
                                headers: {
                                    "Accept": "application/json",
                                    "Content-Type": "application/json",
                                    "Access-Control-Allow-Origin":"http://localhost:3006/message/find"
                                },
                                body:Jsconv}
                        fetch("http://localhost:3006/message/find",config)
                        .then(response => response.json().then((json) => {
                            console.log(json) 
                            if(json !== null){
                                for(let i=0;i<json.Message.length;i++){
                                    const ul=document.getElementById('zone_chat');
                                    const li= document.createElement('li');
                                    const date=document.createElement('p');
                                    const mess=document.createElement('p');
                                    ul.appendChild(li)
                                    li.appendChild(date)
                                    li.appendChild(mess);
                                    mess.innerHTML=json.Message[i].message;
                                    date.innerHTML=json.Message[i].Date; 
                                    const Moi=document.getElementById('envoyeur');
                                    
                                    const qui=document.createElement('p');
                                    li.appendChild(qui);
                                    qui.innerHTML=json.Message[i].aEnvoye
                                    
                                } 
                            }else{
                                console.log("vide")
                            }
                        }))
                    })
                })
            }
            
        }))
    })

    return(
    <div className="chat">
        <div>
            <h3 id="titre"></h3>
            <input type="hidden" id="Receveur"></input>
            <input type="hidden" id="envoyeur"></input>
            <input type="hidden" id="idAnn"></input>
        </div>
        <ul id="zone_chat">
            </ul>
        <form action="/" method="post" className="envoi">
            <input type="text" name="message" id="message" placeholder="Votre message..." size="50" autofocus />
            <input  id="envoi_message" value="Envoyer" />
        </form>

     
    </div>
    )
}

export default Chat
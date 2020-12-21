
import React,{useEffect,useState} from "react";
import "./Chat.css"
import Info from "./recupinfo"
import convers from './nouvelleConv'
import {Link} from "react-router-dom";

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
                                    mess.setAttribute('class',"msg");
                                    ul.appendChild(li);
                                    li.appendChild(mess);
                                    li.appendChild(date);
                                    date.setAttribute('class',"date")
                                    mess.innerHTML=json.Message[i].message;
                                    date.innerHTML=json.Message[i].Date; 
                                    const Moi=document.getElementById('envoyeur');
                                    
                                    const qui=document.createElement('p');
                                    li.appendChild(qui);
                                    const moi= document.getElementById('envoyeur').value;
                                    if(moi== json.Message[i].aEnvoye){
                                        li.setAttribute('class',"en");
                                        console.log('ok')
                                    }
                                    
                                    
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
        <div className="menu">
        <Link to="../"><i class="fas fa-chevron-left"></i> </Link>
            <h3 id="titre"></h3>
            <input type="hidden" id="Receveur"></input>
            <input type="hidden" id="envoyeur"></input>
            <input type="hidden" id="idAnn"></input>
        </div>
        <div  id="chat">
        <ul id="zone_chat">
            </ul>
            </div>
        <form action="/" method="post" className="envoi">
            <input type="text" name="message" id="message" placeholder="Votre message..." size="50" autofocus />
            <div  id="envoi_message">Envoyer</div>
        </form>

     
    </div>
    )
}

export default Chat
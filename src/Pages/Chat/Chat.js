import React,{useEffect,useState} from "react";
import "./Chat.css"
import Info from "./recupinfo"
import convers from './nouvelleConv'
import {Link} from "react-router-dom";

const Chat = ({match}) =>{
    const[data,setdata]=useState([])

    useEffect(()=>{
        convers() //fetchee creation conv ou insertion message
        const idAnn=match.params.id;  //recup de l id de l annonce
        const ann=document.getElementById('idAnn');
        ann.value=idAnn; //mettre dans un input hidden pour nvoyeer apres
        const rec={_id:idAnn}; //mis dans un objet pour fetcher
        const jsrec=JSON.stringify(rec) //changer en string
        
        const con={ method: "POST",
                    headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"http://localhost:3006/id"
                    },
                    body:jsrec};
        fetch("http://localhost:3006/id",con)
        .then(response => response.json().then((json) => { //recup dee l annonce par son id
            const titre=document.getElementById('titre');
            const receveur=document.getElementById('Receveur');
            receveur.value=json[0].MailVendeur //envoie du mailvendeur dans input hidden
            titre.innerHTML=json[0].Titre; //envoie du titre Annonce dans un h3
            const local={ //recup du session Storage
                token: sessionStorage.Token
            }
            const loc=sessionStorage;
            if (loc.length <1 && loc.Token == undefined){ //si pas connecter 
                document.location.href="/ConnexionInscription" //redirection pour se conneecter ou s inscrire
            } else{//sinon
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
                    response.json().then(json => { //recuperation de l user actuel par le session storage
                        document.getElementById('envoyeur').value=json[0].email; //met email de l utilisateur dans input hidden
                        const conv={ //Quand j ai recuperer toute les infos je les mets dans un objet
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
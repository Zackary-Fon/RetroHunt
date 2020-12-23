import react,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import "./conv.css"

const conv=({match}) => { //page qui reunit toute mes conversation
        const[data,setdata]=useState([])
        
        useEffect( () => {
                const user={
                    email: match.params.id
                }
                const jts=JSON.stringify(user)
                const conf={ method: "POST",
                    headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Conversations"
                    },
                    body:jts};
                    fetch("http://localhost:3006/Profil/Conversations",conf)
                    .then(response => response.json().then((json) => {
                        console.log(json)
                        const Conv=document.querySelector('.listArticles');
                        for(let i=0;i<json.length;i++){
                            const li=document.createElement('li');
                            Conv.appendChild(li)
                           
                                const vendeur=document.createElement('p');
                                li.appendChild(vendeur);
                                vendeur.innerHTML="vendeur"+json[i].envoyeur
                           
                                const acheteur=document.createElement('p');
                                li.appendChild(acheteur);
                                acheteur.innerHTML="acheteur"+json[i].receveur;
                                const dernier=(json[i].Message.length)-1;
                            const aller=document.createElement('a');
                            const mess=document.createElement('p');
                            const date=document.createElement('p');
                            li.appendChild(mess)
                            li.appendChild(date)
                            li.appendChild(aller)
                             mess.innerHTML=json[i].Message[dernier].message;
                            date.innerHTML= json[i].Message[dernier].Date;  
                            
                            aller.setAttribute('href',"/Chat/"+json[i].IdAnn);
                            aller.innerHTML="y accéder"
                            
                        }
                            fetch("http://localhost:3006/Profil/Conversations/receveur",conf)
                            .then(response => response.json().then((json) => {
                            console.log(json)
                            const Conv=document.querySelector('.listArticles');
                            for(let i=0;i<json.length;i++){
                                const li=document.createElement('li');
                                Conv.appendChild(li)
                               
                                    const vendeur=document.createElement('p');
                                    li.appendChild(vendeur);
                                    vendeur.innerHTML="vendeur"+json[i].envoyeur
                               
                                    const acheteur=document.createElement('p');
                                    li.appendChild(acheteur);
                                    acheteur.innerHTML="acheteur"+json[i].receveur;
                                    const dernier=(json[i].Message.length)-1;
                                const aller=document.createElement('a');
                                const mess=document.createElement('p');
                                const date=document.createElement('p');
                                li.appendChild(mess)
                                li.appendChild(date)
                                li.appendChild(aller)
                    
                                mess.innerHTML=json[i].Message[dernier].message;
                                date.innerHTML= json[i].Message[dernier].Date;  
                                aller.setAttribute('href',"/Conversation/"+json[i]._id);
                                aller.innerHTML="y accéder"
                            }
                            }))
                    }))
        });
        const {params:id } = match;
        
        return (
            <div className="bodyRecent" >
                <Link to="/Profil"><i class="fas fa-chevron-left"></i> Retour</Link>
                <ul className="listArticles"></ul>
            </div>
        
        )
}

export default conv
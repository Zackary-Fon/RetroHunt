import react,{useEffect} from "react"
import "../../Chat/Chat.css"
import env from "./envoieConv"
const ConvProf=({match})=>{


    useEffect(()=>{
        env()
        const idAnn=match.params.id;
        const rec={id:idAnn};
        const jsrec=JSON.stringify(rec)
        
        const con={ method: "POST",
                    headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"http://localhost:3006/message/find/id"
                    },
                    body:jsrec};
        fetch("http://localhost:3006/message/find/id",con)
        .then(response => response.json().then((json) => {
            console.log(json);
            document.getElementById('titre').innerHTML=json.TitreAnnonce;
            console.log(json.Message.length)
            for(let h=0;h<json.Message.length;h++){
                const ann=document.getElementById('zone_chat');
                const mess=document.createElement('h3');
                const date=document.createElement('p');
                const envoie=document.createElement('p');
                ann.appendChild(mess);
                ann.appendChild(date);
                ann.appendChild(envoie);
                const idann=document.getElementById('idAnn');

                document.getElementById('Receveur').value=json.receveur;
                
                document.getElementById('envoyeur').value=json.envoyeur;
                idann.value=json.IdAnn;

                mess.innerHTML=json.Message[h].message;
                date.innerHTML=json.Message[h].Date;
                envoie.innerHTML=json.Message[h].aEnvoye;
                
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

export default ConvProf
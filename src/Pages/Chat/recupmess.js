import react,{useEffect} from "react"
const URL='http://localhost:3006/message/find';

const URL2 = "http://localhost:3006/auth";

const mess=()=>{

    const receveur=document.getElementById('Receveur').innerHTML;
    const envoyeur=document.getElementById('envoyeur');
        console.log('load')
    console.log(envoyeur)
    const conv={
        receveur: receveur,
        envoyeur: envoyeur.value
    }

    const Jsconv = JSON.stringify(conv)
    
    console.log(Jsconv)
    const config={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/message/find"
},
body:Jsconv}

fetch(URL,config)
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
        if(Moi.value == json.Message[i].aEnvoye){
            console.log('c\'est moi')
        }
    } 

     }
     else{
         console.log("vide")
     }

}))
}

export default mess
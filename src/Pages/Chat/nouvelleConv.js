import react from "react"

const convers=()=>{
<<<<<<< Updated upstream
    document.getElementById('envoi_message').addEventListener('click',()=>{
        const ladate= new Date();
        const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()
        const Conv={
            envoyeur:document.getElementById('envoyeur').value,
            receveur:document.getElementById('Receveur').value,
            Titre:document.getElementById('titre').innerHTML,
            IdAnn:document.getElementById('idAnn').value,
            Message:[{message:document.getElementById('message').value,aEnvoye:document.getElementById('envoyeur').value,
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

   document.location.href='/Chat'+document.getElementById('idAnn').value;


}
else{
document.location.href='/Chat/'+document.getElementById('idAnn').value;
console.log('ok')

} 
})

)
})
=======
    document.getElementById('envoi_message').addEventListener('click',()=>{ //quand je clique sur envoyer
        const ladate= new Date(); //cration d une constantee date
        const date=ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear() //rcuperation dee la date
        const Conv={ //Rcuperation de la conv
            envoyeur:document.getElementById('envoyeur').value,
            receveur:document.getElementById('Receveur').value,
            Titre:document.getElementById('titre').innerHTML,
            IdAnn:document.getElementById('idAnn').value,
            Message:[{message:document.getElementById('message').value,
            aEnvoye:document.getElementById('envoyeur').value,
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
        if(json ==="deja une conv"){ //s'il y a deja une conv d existante
          const mess={ //je recupere lees données pour le meessage
            Titre:document.getElementById('titre').innerHTML,
            IdAnn:document.getElementById('idAnn').value,
            receveur:document.getElementById('Receveur').value,
            envoyeur:document.getElementById('envoyeur').value,
            message:document.getElementById('message').value,
            Date:date}
          const jsmess=JSON.stringify(mess)
          
          const config={ method: "POST",
                        headers: {
                          "Accept": "application/json",
                          "Content-Type": "application/json",
                          "Access-Control-Allow-Origin":"http://localhost:3006/message"
                        },
                        body:jsmess};
                        
          fetch("http://localhost:3006/message",config)
          .then(response => response.json().then((json) => {
            if(json=="OK"){ //si message envoyé
            //document.location.href='/Profil'
            console.log('ok')
            }else{//sinon
            console.log(json) //j'affiche la reponse
            }
          }))
        }else{ //si pas de conv cration d une conv
          //document.location.href='/Profil'
          console.log('ok')
        } 
      }))
    })
>>>>>>> Stashed changes
}

export default convers
import react from 'react'
const URL="http://localhost:3006/auth"

const fetcha=()=>{
const local={
    token: sessionStorage.Token,
}
const bb=JSON.stringify(local);
    const config = {
        method: 'POST',
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3006/auth",
        },
        body: bb
    }
        
    fetch(URL, config)
    .then(response => {
        response.json().then(json => {
            const ann=document.querySelector('.Annonces');
            console.log(json[0].Prenom)
        document.querySelector('#prenom').innerHTML=json[0].Prenom;
           document.querySelector('#nom').innerHTML=json[0].Nom;
            document.querySelector('#email').innerHTML=json[0].email; 
            const p=document.createElement('a');
            ann.appendChild(p);
            const title=json[0].email
            p.setAttribute('href',"/Annonce/"+title);
            p.innerHTML="Annonces"
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */
      })})
}

export default fetcha
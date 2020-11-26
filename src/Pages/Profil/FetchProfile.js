import react from 'react'
const URL="http://localhost:3006/auth"
const fetcha=()=>{
const local={
    token: localStorage.Token,
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
       document.querySelector('#prenom').innerHTML=json.User.Prenom;
           document.querySelector('#nom').innerHTML=json.User.Nom;
            document.querySelector('#email').innerHTML=json.User.email;
            console.log(json.User.Prenom); 
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */
      })})
}

export default fetcha
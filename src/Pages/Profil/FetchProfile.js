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
            const ann=document.querySelector('.Annonces');
        document.querySelector('#prenom').innerHTML=json.Prenom;
           document.querySelector('#nom').innerHTML=json.Nom;
            document.querySelector('#email').innerHTML=json.email; 
            console.log(json.Annonces); 
            for(let i=0;i<json.Annonces.length;i++){
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span2 = document.createElement('span');
        const btn=document.createElement('button');
        ann.appendChild(li);
        li.appendChild(span2);
        li.appendChild(img);
        li.appendChild(btn);
        img.setAttribute('src',json.Annonces[i].image);
        console.log(json.Annonces[i].image)
        span2.innerHTML =json.Annonces[i].Titre;
        btn.innerHTML="Y Acceder"
            /* btn.setAttribute('href',) */
            }
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */
      })})
}

export default fetcha
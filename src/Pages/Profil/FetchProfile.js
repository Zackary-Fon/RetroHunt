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
            const ann2=document.querySelector('.modificationProfil');
            console.log(json[0].Prenom)
        document.querySelector('#prenom').innerHTML=json[0].Prenom;
           document.querySelector('#nom').innerHTML=json[0].Nom;
            document.querySelector('#email').innerHTML=json[0].email; 
            const p=document.createElement('a');
            const modif=document.createElement('a');
            ann.appendChild(p);
            ann2.appendChild(modif);
            const title=json[0].email;
            modif.setAttribute('href',"/Modif/"+title);
            modif.setAttribute('class',"profil_set");
            modif.innerHTML=" Modifier mon prodil";
            const j={
                email:title
            }
            const jts=JSON.stringify(j)
            console.log(jts)
const conf={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/Profil/Annonce"
},
body:jts};
fetch("http://localhost:3006/Profil/Annonce",conf)
.then(response => response.json().then((json) => {
    console.log(json)
     if (json.length >0){
        p.setAttribute('href',"/Annonce/"+title);
        p.innerHTML="Annonces";
        }else{
             p.setAttribute('href',"/DeposerAnnonce");
        p.innerHTML=" deposer une Annonces";
        }  
    
}))
            
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */
      })})
}

export default fetcha
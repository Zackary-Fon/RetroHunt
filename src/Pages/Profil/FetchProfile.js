import react from 'react'
const URL="http://localhost:3006/auth"

const fetcha=()=>{
    const local={token: sessionStorage.Token} //recup token
    const bb=JSON.stringify(local); //le je change en objeet string
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
    .then(response => { //je recup toutes les infos de l user
            response.json().then(json => { //je créer et/ou injeecte toutes ls données
                const ann=document.querySelector('.Annonces');
                const ann2=document.querySelector('.modificationProfil');
                document.querySelector('#prenom').innerHTML=json[0].Prenom;
                document.querySelector('#nom').innerHTML=json[0].Nom;
                document.querySelector('#email').innerHTML=json[0].email;
                if(json[0].Localisation !== undefined){ //si j ai une localisation alors j injecte
                    document.querySelector('#localisation').innerHTML=json[0].Localisation;
                }
                const p=document.createElement('a');
                const conv=document.createElement('a');
                const modif=document.createElement('a');
                ann.appendChild(p);
                ann.appendChild(conv);
                ann2.appendChild(modif);
                const title=json[0].email;
                modif.setAttribute('href',"/Modif/");
                modif.setAttribute('class',"profil_set"); //oddification de profil
                modif.innerHTML=" Modifier mon profil";
                const j={email:title}
                const jts=JSON.stringify(j)
                const conf={ method: "POST",
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Annonce"
                            },
                            body:jts};

                fetch("http://localhost:3006/Profil/Annonce",conf) //fetch recup annonce
                    .then(response => response.json().then((json) => {
                        if (json.length >0){ //si j ai des annonces
                            p.setAttribute('href',"/Annonce/"+title);
                            p.innerHTML="Mes Annonces";
                        }else{ //si j een ai pas
                        p.setAttribute('href',"/DeposerAnnonce");
                        p.innerHTML=" Deposer votre première Annonces";
                        }  
                    }))
                const config={ method: "POST",
                                headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Conversations"
                                },
                            body:jts};

                fetch("http://localhost:3006/Profil/Conversations",config) //recup conveersations
                    .then(response => response.json().then((json) => {
                        console.log(json)
                        if (json.length >=0) //si j ai des conversations
                        {
                        conv.innerHTML="Mes Conversations";
                        conv.setAttribute('href',"/Conv/"+title);
                        }  
                    }))
            })})
    }

export default fetcha
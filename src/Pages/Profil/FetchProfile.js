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
            console.log(json.Annonces.length); 
            if (json.Annonces.length >=3){
            for(let i=0;i<3;i++){
        const li = document.createElement('li');
        const img = document.createElement('img');
        const span2 = document.createElement('span');
        const btn=document.createElement('button');
        const btn2=document.createElement('button');
        ann.appendChild(li);
        li.appendChild(span2);
        li.appendChild(img);
        li.appendChild(btn);
        li.appendChild(btn2)
        img.setAttribute('src',json.Annonces[i].image[0]);
        img.setAttribute('classname','imgAnnonce');
        span2.innerHTML =json.Annonces[i].Titre;
        
        btn2.innerHTML="Modifier";
        btn2.setAttribute('className',"Modifier");
        btn.setAttribute('className',"acces");
        btn.innerHTML="Y Acceder";
            /* btn.setAttribute('href',) */
            }}else{
                for(let i=0;i<json.Annonces.length;i++){
                    const li = document.createElement('li');
                    const img = document.createElement('img');
                    const span2 = document.createElement('span');
                    const btn=document.createElement('button');
                    const btn2=document.createElement('button')
                    ann.appendChild(li);
                    li.appendChild(img);
                    li.appendChild(span2);
                    li.appendChild(btn);
                    li.appendChild(btn2)
                    img.setAttribute('src',json.Annonces[i].image[0]);
                    img.setAttribute('classname','imgAnnonce');
                    span2.innerHTML =json.Annonces[i].Titre;
                    btn.innerHTML="Y Acceder";
                    btn2.innerHTML="Modifier";
                    btn2.setAttribute('className',"Modifier");
                    btn.setAttribute('className',"acces");
                    //btn.classList.add("acces")
                        }
            }
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */
      })})
}

export default fetcha
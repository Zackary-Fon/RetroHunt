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
        document.querySelector('#prenom').innerHTML=json.Prenom;
           document.querySelector('#nom').innerHTML=json.Nom;
            document.querySelector('#email').innerHTML=json.email; 
            console.log(json.Annonces.length); 
            if (json.Annonces.length >=3){
                for(let i=0;i<3;i++){
                const li = document.createElement('li');
                const div=document.createElement('div');
                const img = document.createElement('img');
                const span2 = document.createElement('span');
                const btn=document.createElement('a');
                const btn2=document.createElement('a');
                const title=json.Annonces[i]._id;
                //console.log("\""+title+"\"");
                console.log(json.Annonces[i]._id)
                ann.appendChild(div);
                div.appendChild(img);
                
                div.appendChild(span2);
                div.appendChild(btn);
                div.appendChild(btn2)
                img.setAttribute('src',json.Annonces[i].image[0]);
                img.setAttribute('class','imgAnnonce');
                div.setAttribute('class','contain')
                span2.innerHTML =json.Annonces[i].Titre;
                btn.innerHTML="Y Acceder";
                btn2.innerHTML="Modifier";
                btn2.setAttribute('href',"/Modification/"+title);
                btn.setAttribute('href',"/Produit/"+title);
                btn2.setAttribute('class',"modif");
                btn.setAttribute('class',"acces");
            /* btn.setAttribute('href',) */
            }}else{
                for(let i=0;i<json.Annonces.length;i++){
                    const li = document.createElement('li');
                    const div=document.createElement('div');
                    const img = document.createElement('img');
                    const span2 = document.createElement('span');
                    const btn=document.createElement('a');
                    const btn2=document.createElement('a');
                    ann.appendChild(div);
                    div.appendChild(img);
                    const title=json.Annonces[i]._id;
                    div.appendChild(span2);
                    div.appendChild(btn);
                    div.appendChild(btn2)
                    img.setAttribute('src',json.Annonces[i].image[0]);
                    img.setAttribute('class','imgAnnonce');
                    div.setAttribute('class','contain')
                    span2.innerHTML =json.Annonces[i].Titre;
                    btn.innerHTML="Y Acceder";
                    btn2.innerHTML="Modifier";
                    btn.setAttribute('href','/Product/'+title),
                    
                    btn2.setAttribute('href','/Modification/'+title)
                    btn2.setAttribute('class',"modif");
                    btn.setAttribute('class',"acces");
                    //btn.classList.add("acces")
                        }
            }
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */
      })})
}

export default fetcha
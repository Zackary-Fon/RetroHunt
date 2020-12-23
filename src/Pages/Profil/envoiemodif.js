import react from "react"

const envoimod=()=>{ //ftch envoie modif profil a la bdd
const btn= document.getElementById('submit');
btn.addEventListener('click',()=>{
    const form={
        id:document.getElementById('user').value,
        Nom:document.getElementById('nom').value,
        Prenom:document.getElementById('Prenom').value,
        email: document.getElementById('email').value,
        Localisation:document.getElementById('Localisation').value,
        Password:document.getElementById('password').value,
    }
    const formjs=JSON.stringify(form);
    
    console.log(formjs);
    const conf = {
        method: 'POST',
        headers: {
            "Accept": "application/json", //j'accepte de recevoir du json
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://apiretrohunt.herokuapp.com/user/modif",
        },
        body: formjs
    }
    fetch('https://apiretrohunt.herokuapp.com/user/modif',conf)
    .then(response => {
        response.json().then(json => {
            console.log(json)
        })

})
})
}

export default envoimod
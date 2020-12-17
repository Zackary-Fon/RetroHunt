import react from "react"

const envoimod=()=>{
const btn= document.getElementById('submit');
btn.addEventListener('click',()=>{
    console.log('test envoi')
    const prof=document.getElementById('myform');
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
            "Access-Control-Allow-Origin": "http://localhost:3006/user/modif",
        },
        body: formjs
    }
    fetch('http://localhost:3006/user/modif',conf)
    .then(response => {
        response.json().then(json => {
            console.log(json)
        })

})
})
}

export default envoimod
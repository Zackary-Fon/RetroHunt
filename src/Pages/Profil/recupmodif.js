import react from "react"

const URL2 = "http://localhost:3006/auth";


const recmod=()=>{
    const local = {
        token: sessionStorage.Token,
    }
    console.log(local)
    const bb = JSON.stringify(local);
    const conf = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3006/auth",
        },
        body: bb
    }

    fetch(URL2, conf)
        .then(response => {
            response.json().then(json => { //Recup toutes les infos de l user grace a son token et les injecte dans lee front
            const email=document.getElementById('email');
            const nom=document.getElementById('nom');
            const prenom=document.getElementById('Prenom');
            const id=document.getElementById('user');
            const pass=document.getElementById('password');
            nom.value=json[0].Nom;
            id.value=json[0]._id;
            prenom.value=json[0].Prenom;
            email.value=json[0].email;
            password.value=json[0].Password;
            })
        }
        )
}

export default recmod
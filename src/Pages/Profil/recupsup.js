import react from 'react';
const URL2 = "http://localhost:3006/auth";

const recsup = () => {
    const local = {
        token: sessionStorage.Token,
    } //recup token
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
            response.json().then(json => { //recup les données et les implémente dans SupprimerProfil
                const loc = json.Prenom;
                document.querySelector('#perso').innerHTML= loc;
                document.querySelector('#mv').innerHTML= json.email;
            })
        })
}

export default recsup
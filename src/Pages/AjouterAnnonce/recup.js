import react from 'react'

const URL2 = "http://localhost:3006/auth";

const recup = () => {
    const local = {
        token: sessionStorage.Token, //recup du token
    }
    const bb = JSON.stringify(local); //stringidy du token
    const conf = { //config de la fetch
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
            response.json().then(json => {
                document.querySelector('#loc').value = json[0].Prenom;//mettr prenom dans input hidden
                document.querySelector('#mv').value = json[0].email;//mettre email dan input hidden
            })
        })
}

export default recup
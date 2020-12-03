import react from 'react'

const URL2 = "http://localhost:3006/auth";

const recsup = () => {
    const local = {
        token: localStorage.Token,
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
            response.json().then(json => {
                const loc = json.Prenom;
                const mv=json.email;
                console.log( document.querySelector('#mv'))
                document.querySelector('#perso').innerHTML= loc;
                document.querySelector('#mv').innerHTML= json.email;
            })
        })
}

export default recsup
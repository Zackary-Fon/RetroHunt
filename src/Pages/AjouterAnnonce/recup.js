import react from 'react'

const URL2 = "http://localhost:3006/auth";

const recup = () => {
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
                console.log(loc)
                document.querySelector('#loc').value = loc;
                document.querySelector('#mv').value = json.email;
                console.log(typeof document.querySelector('#loc').value)
            })
        })
}

export default recup
import react from 'react'

const URL2 = "http://localhost:3006/auth";

const recup = () => {
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
            response.json().then(json => {
                const ann=document.querySelector('.Annonces');
                document.querySelector('#email').value = json.email;
                const p=document.createElement('a');
                ann.appendChild(p);
                const title=json._id
                p.setAttribute('href',"/Annonce/"+title);
            })
        })
}

export default recup
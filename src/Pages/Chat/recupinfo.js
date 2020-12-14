import react from "react"

const URL2 = "http://localhost:3006/auth";


const Info=()=>{
    const local={
        token: sessionStorage.Token
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
            console.log(json)
            document.getElementById('envoyeur').value=json[0].email;
            })

        })
}

export default Info
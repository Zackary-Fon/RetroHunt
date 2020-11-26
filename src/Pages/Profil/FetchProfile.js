import react from 'react'
const URL="http://localhost:3006/auth"
const fetcha=()=>{
const local={
    token: localStorage.Token,
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
            console.log(json)
      })})
}

export default fetcha
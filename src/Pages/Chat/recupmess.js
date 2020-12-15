import react,{useEffect} from "react"
const URL='http://localhost:3006/message/find';

const URL2 = "http://localhost:3006/auth";

const mess=()=>{
    
    const receveur=document.getElementById('Receveur').innerHTML;
    const envoyeur=document.getElementById('envoyeur').value;
    
    console.log(envoyeur)
    const conv={
        receveur: receveur,
        envoyeur: envoyeur
    }

    const Jsconv = JSON.stringify(conv)
    
    console.log(Jsconv)
    const config={ method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Access-Control-Allow-Origin":"http://localhost:3006/message/find"
},
body:Jsconv}

fetch(URL,config)
.then(response => response.json().then((json) => {
    console.log(json)


}))


}

export default mess
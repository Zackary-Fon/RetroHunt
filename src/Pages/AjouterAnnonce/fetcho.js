import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/deposer"; //url back 

const fetcho=()=>{
    document.getElementById("submit").addEventListener('click',()=>{//evenement au click
       
        let form = document.getElementById("myForm"); //je recupere mon formulaire
        console.log(form)
        let formData = new FormData(form); //je transforme mon formulaire en formData
        console.log(formData)
        const config = { //config fetch
            method: 'POST', //j envoie des données
            headers: {
            "Access-Control-Allow-Origin":"http://localhost:3006/deposer" //j autorise l accès 
        },
        body: formData,// j envoie dans body mon formdata (sur post man je pas oublier de mettre formdata et pas raw)
        }
    fetch(URL, config) //instannciation
    .then(response => response.json().then((response)=>{//quand je recois la reponse et que je la json
        if(response=="OK")//res.json("OK") //gestion erreur
        {
            document.location.href="/Profil"
        }
        else{
            console.log(response)
        }
    })
    )
})

window.addEventListener("keydown", (eve)=> {//evenement au click
    const sub=document.getElementById('submit');
     if (eve.key=="Enter" && sub.disabled ==false ){
    let form = document.getElementById("myForm"); //je recupere mon formulaire
    let formData = new FormData(form); //je transforme mon formulaire en formData
    const config = { //config fetch
        method: 'POST', //j envoie des données
        headers: {
        "Access-Control-Allow-Origin":"http://localhost:3006/deposer" //j autorise l accès 
    },
    body: formData,// j envoie dans body mon formdata (sur post man je pas oublier de mettre formdata et pas raw)
    }
fetch(URL, config) //instannciation
.then(response => response.json().then((response)=>{//quand je recois la reponse et que je la json
    if(response=="OK")//res.json("OK") //gestion erreur
    {
        document.location.href="/Profil"
    }
    else{
        console.log(response)
    }
}))
    }
})
}

export default fetcho
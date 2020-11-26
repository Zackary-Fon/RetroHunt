import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/deposer";

const fetcho=()=>{
  console.log(document.querySelector('#image'))  
    document.getElementById("submit").addEventListener('click',()=>{
        let form = document.getElementById("myForm");
        
        let formData = new FormData(form);
        const config = {
            method: 'POST',
            headers: {
            "Access-Control-Allow-Origin":"http://localhost:3006/deposer"
        },
        body: formData,
    }
    fetch(URL, config)
    .then(response => 
            console.log(response))
    })
}

export default fetcho
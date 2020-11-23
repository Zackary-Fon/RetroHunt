import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/deposer";

const RecupPlay=()=>{
    console.log('hello')
    fetch(URL,{ method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3006/deposer"
    }})
    .then(response => {
            response.json().then(json => {
            console.log(json);
        })
    }
)
}
export default RecupPlay ; 
import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/all";
const Rec=[];
const RecupPlay=()=>{
    console.log('hello')
    fetch(URL,{ method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3006/all"
    }})
    .then(response => {
            response.json().then(json => {
            //console.log(json);
            const taille=(json.length -1);
            console.log(taille-6);
            let Recent=taille-6;

            for(let i=0;i<6;i++){
                Rec.push(json[Recent])
                Recent++;
            }
            console.log(Rec)
            //console.log(json[19])//SMS
        })
    }
)
}
export const tab =Rec;
export default RecupPlay ; 
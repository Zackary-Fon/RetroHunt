import React,{useState,useEffect} from "react";

const URL="http://localhost:3006/all";
const Rec=[];

    


const RecupPlay=()=>{
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
<<<<<<< HEAD
            console.log(taille-6);
            let Recent=taille-6;

=======
            
            let Recent=taille-6;
>>>>>>> 78210d1d0b9ceb91825ef743fe60fabbaa1af17b
            for(let i=0;i<6;i++){
                Rec.push(json[Recent])
                Recent++;
            }
            console.log(Rec)
            //console.log(json[19])//SMS
        })
    }
).then(json=>setdata(json))

}

export const tab =Rec;
export default RecupPlay ; 
import react from "react"

const ver =()=>{
    
    const local=sessionStorage;
    const btn=document.getElementById('con');
    console.log(document.getElementById('contact').innerHTML)
     if (local.length >=1 && local.Token != "undefined"){
        document.getElementById('con').style.display="block";
    }else{
        document.getElementById('con').style.display="none";
    } 
    
}

export default ver
import react from 'react'

const verif=()=>{
const photo=document.querySelector('#image'); //recup des infos a verifier
const Titre=document.querySelector('#TitreAnnonce')
const Date=document.querySelector('#Date');
const Prix=document.querySelector('#Prix');
const Etat=document.querySelector('#Etat');
const Console=document.querySelector('#console');
const description=document.querySelector('#description');
const sub=document.querySelector('#submit'); 
const btncheck=document.querySelector('#invalidCheck');


photo.addEventListener('change',()=>{ //verif si jpg,jpeg ou png
    const ext=/.(jpg|jpeg|png)$/;
    const test=ext.test(photo.value)
    if (test===false){ //si pas jpg, jpeg ou png
        console.log("pas ok")
        document.querySelector('#photoPasOK').style.display="block" //j affiche message erreur
    }
})

Date.addEventListener('keyup',()=>{
    if (Date.value <=1900 || Date.value >= 2010){
        console.log("date trop grande")
    }
})
document.getElementById('myForm').addEventListener('change',()=>{
    if(Titre.value !="" && (Date.value>1900 && Date.value < 2010) &&
    Prix.value !="" && Etat.value!=" " && Console.value !=" "
    && description.value!="" && photo.value != ""){ //verification de toutes les données ok et pas vide
        console.log("OK")
        sub.disabled=false; //able bouton
    }else{ //si pas ok je console log tout pour voire le probleme
        console.log(Titre.value);
        console.log(Date.value)
        console.log(Prix.value)
        console.log(Etat.value)
        console.log(Console.value)
        console.log(description.value)
        console.log(photo.value)
        sub.disabled=true; //bouton disabled
    }
})




}

export default verif
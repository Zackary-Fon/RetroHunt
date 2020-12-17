import react from 'react'

const verif=()=>{
const photo=document.querySelector('#image');
const Titre=document.querySelector('#TitreAnnonce')
const Date=document.querySelector('#Date');
const Prix=document.querySelector('#Prix');
const Etat=document.querySelector('#Etat');
const Console=document.querySelector('#console');
const description=document.querySelector('#description');
const sub=document.querySelector('#submit'); //sub.disabled = false
const btncheck=document.querySelector('#invalidCheck');
photo.addEventListener('change',()=>{
    const ext=/.(jpg|jpeg|png|gif)$/;
    console.log(photo.value)
    console.log(typeof ext.test(photo.value))
    const test=ext.test(photo.value)
    if (test===false){
        console.log("pas ok")
        document.querySelector('#photoPasOK').style.display="block"
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
    && description.value!="" && photo.value != ""){
        console.log("OK")
        sub.disabled=false;
    }else{
        console.log(Titre.value);
        console.log(Date.value)
        console.log(Prix.value)
        console.log(Etat.value)
        console.log(Console.value)
        
        console.log(description.value)
        console.log(photo.value)
        sub.disabled=true;
    }
})




}

export default verif
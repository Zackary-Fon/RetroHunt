import React from "react"

const verif=()=>{
    const name=document.getElementById('Nom');
const prenom=document.getElementById('Prenom');
const mdp= document.getElementById('Password');
const mdp2=document.getElementById('mdp2');
const email=document.getElementById('email');
const sub=document.getElementById('invalidCheck');
const btnsub=document.getElementById('submit');

name.addEventListener("keyup", ()=>{
    if(name.value ==''||name.value ==' '){
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }
});

prenom.addEventListener("keyup", ()=>{
    if(prenom.value ==''||prenom.value==' '){
        prenom.classList.remove('is-valid');
        prenom.classList.add('is-invalid');
    }else{
        
        prenom.classList.remove('is-invalid');
        prenom.classList.add('is-valid');
      
    }
});

mdp.addEventListener("keyup", ()=>{
    if(mdp.value==''||mdp.value ==' '){
        mdp.classList.remove('is-valid');
        mdp.classList.add('is-invalid');
    }else{
        mdp.classList.remove('is-valid');
        const paswd= /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if(paswd.test(mdp.value)) {
            mdp.classList.remove('is-invalid');
            mdp.classList.add('is-valid');
        }
    }
});

email.addEventListener("keyup", ()=>{
    if(email.value==''||email.value ==' '){
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    }else{
        email.classList.add('is-invalid');
        const mail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(mail.test(email.value)) {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
        }
    }
});

mdp2.addEventListener("keyup", ()=>{
    if(mdp2.value ==''||mdp2.value ==' '){
        mdp2.classList.remove('is-valid');
        mdp2.classList.add('is-invalid');
    }else{
        if(mdp2.value===mdp.value){
        mdp2.classList.remove('is-invalid');
        mdp2.classList.add('is-valid');
        
    }
    }


});

document.getElementById('form').addEventListener('change',()=>{
    console.log(mdp.classList)
    if(mdp.classList.contains('is-valid') && mdp2.classList.contains('is-valid') && name.classList.contains('is-valid')
    && prenom.classList.contains('is-valid')&&email.classList.contains('is-valid')&&sub.checked==true ){
        btnsub.disabled = false
    }
    else{
        console.log("retry")
        btnsub.disabled = true
    }
})


}
export default verif;
import react from "react"

const verifo=()=>{
const local=localStorage;
const connexion=document.querySelector('#connexion');
const profil=document.querySelector('#profil')
const annonce=document.querySelector('#annonce')
const deco=document.querySelector('#deco')
 if (local.length >=1 && local.Token != "undefined"){
    profil.style.display="block";
    annonce.style.display="block";
    connexion.style.display="none";
deco.style.display="block";
}
else{ 
    connexion.style.display="block";
    profil.style.display="none";
    annonce.style.display="none";
    deco.style.display="none";
}
    
   /*  profil.classList.add="disabled" */
   console.log(profil)
   console.log(connexion)
   console.log(annonce)

}

export default verifo
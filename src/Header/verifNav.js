import react from "react"

const verifo=()=>{
const local=sessionStorage;
console.log(local)
const connexion=document.querySelector('#connexion');
const profil=document.querySelector('#profil')
const annonce=document.querySelector('#annonce')
const deco=document.querySelector('#deco')
 if (local.length >=1 && local.Token != "undefined"){
  console.log(local)
    profil.style.display="block";
    annonce.style.display="block";
    connexion.style.display="none";
deco.style.display="block";
}
else{ 
  console.log(local)
    connexion.style.display="block";
    profil.style.display="none";
    annonce.style.display="none";
    deco.style.display="none";
}

  deco.addEventListener('click',()=>{
    sessionStorage.removeItem('Token');
    connexion.style.display="block";
    profil.style.display="none";
    annonce.style.display="none";
    deco.style.display="none";
  })
  
}

export default verifo
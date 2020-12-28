 import react from 'react';


const Burger = () =>{
    
const local=sessionStorage;
const connexionB=document.querySelector('#connexion2');
console.log(connexionB)
const profilB=document.querySelector('#profil2');
console.log(profilB)
const decoB=document.querySelector('#deco2');
    const burger=document.querySelector('.burger');
    burger.addEventListener('click',()=>{
        console.log('click')
        const menuB=document.querySelector('.menuB');
        const searchbutton=document.querySelector('.burgersearch');
        
console.log(local)
        if(menuB.style.display === "none"){
            menuB.style.display="block";
           
        }else{
            menuB.style.display="none";
        }

        const Jeux=document.getElementById('Jeux');

        Jeux.addEventListener('click',()=>{
            const jj=document.getElementById('jj');
            jj.style.color="#61F2F5";
            jj.style.textshadow="0px 0px 5px #61F2F5";
            const liste=document.getElementById('ListeCate');
            liste.style.display="block";
        })
    })
    
    if (local.length >=1 && local.Token != "undefined"){
        console.log('connecter')
        profilB.style.display="block !important";
        connexionB.style.display="none !important";
        decoB.style.display="block !important";
    }else{
        console.log('pas co ')
        profilB.style.display="none !important";
        connexionB.style.display="block !important";
        decoB.style.display="none !important";
    }

}
export default Burger;
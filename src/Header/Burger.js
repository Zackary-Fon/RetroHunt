 import react from 'react';


const Burger = () =>{
    const burger=document.querySelector('.burger');
    burger.addEventListener('click',()=>{
        console.log('click')
        const menuB=document.querySelector('.menuB');
        const searchbutton=document.querySelector('.burgersearch');
        if(menuB.style.display === "none"){
            menuB.style.display="block";
        }else{
            menuB.style.display="none";
        }
        const Jeux=document.getElementById('Jeux');

        Jeux.addEventListener('click',()=>{
            const jj=document.getElementById('jj');
            jj.style.color="blue";
            const liste=document.getElementById('ListeCate');
            liste.style.display="block";
        })
    })
    

}
export default Burger;
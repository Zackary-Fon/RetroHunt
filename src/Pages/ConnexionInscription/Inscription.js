import React,{useState,useEffect} from "react";
import  fetchie from "./fetchInsc"


const Inscription=()=>{
    
    useEffect(() => {
       fetchie()
      })
      
     return(
        <div>
            <form  id="form" method="POST" >
                <input type="text" placeholder="Nom" name="Nom" id="Nom" ></input>
                <input type="text" placeholder="Prenom" name="Prenom" id="Prenom" ></input>
                <input type="text" placeholder="Adresse Mail" name="email" id="email" ></input>
                <input type="text" placeholder="Mot de Passe" name="Password" id="Password"></input>
                <input type="text" placeholder="Confirmez le mot de passe"></input>
                <button  type="submit" id="submit" >Inscription</button>
            </form>
            
        </div>
    ) 


}

export default Inscription;
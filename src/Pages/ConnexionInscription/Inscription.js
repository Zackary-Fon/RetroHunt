import React,{useState,useEffect} from "react";
import  fetchie from "./fetchInsc"
/* import verif from "./verifInsc" */


const Inscription=()=>{
    
    useEffect(() => {{/* fetch fonctionne mieux avec un a */}
       fetchie() //utilisation de la fonction qui contient le fetch dans fetchInsc
      /*  verif() *///js de verification de validité du form
      })
      
     return(
        <div>
            <form  id="form" method="POST"  >
                <input type="text" placeholder="Nom" name="Nom" id="Nom" ></input>
                <input type="text" placeholder="Prenom" name="Prenom" id="Prenom" ></input>
                <input type="mail" placeholder="Adresse Mail" name="email" id="email"  ></input>
                <input type="password" placeholder="Mot de Passe" name="Password" id="Password"></input>
                <input type="password" placeholder="Confirmez le mot de passe" id="mdp2"></input>
                <a  type="submit" id="submit" href="">Inscription</a>{/* fetch fonctionne mieux avec un a */}
            </form>
            
        </div>
    ) 


}

export default Inscription;
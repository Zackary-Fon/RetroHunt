import React, {useState} from "react"
import Connexion from "./Connexion.js";
import Inscription from "./Inscription.js";

const ConnexionInscription = () =>{
    const [switcher, isTrou] = useState(false);
    
    const Michel = () =>{
        isTrou(!switcher)
    }

    if (switcher == false){
    return(
        <div>
            <Connexion/>
            <button onClick={Michel}>Pas encore inscrit ?</button>
        </div>
    )
    }else{
        return(
            <div>
                <Inscription/>
                <button onClick={Michel}>Se connecter</button>
            </div>
        )
    }

}

export default ConnexionInscription;




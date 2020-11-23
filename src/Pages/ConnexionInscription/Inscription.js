import React,{useState,useEffect} from "react";
<<<<<<< Updated upstream
import  fetchie from "./fetchInsc"
/* import verif from "./verifInsc" */
=======
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchInsc";
import "./ConnexionInscription.css";
 import verif from "./verifInsc" 
>>>>>>> Stashed changes


const Inscription=()=>{
    
    useEffect(() => {{/* fetch fonctionne mieux avec un a */}
       fetchie() //utilisation de la fonction qui contient le fetch dans fetchInsc
<<<<<<< Updated upstream
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
=======
        verif() ///js de verification de validité du form
    })
    
    return(
        <div>
            <form  id="form" method="POST"  >
                <Row className="input-customize">
                    <input type="text" className="form-control" placeholder="Nom" name="Nom" id="Nom" ></input>
                </Row>
                <Row className="input-customize">
                    <input type="text" className="form-control" placeholder="Prenom" name="Prenom" id="Prenom" ></input>
                </Row>
                <Row className="input-customize">
                    <input type="mail"  className="form-control" placeholder="Adresse Mail" name="email" id="email"  ></input>
                </Row>
                <Row className="input-customize">
                    <input type="password" className="form-control" placeholder="Mot de Passe" name="Password" id="Password"></input>
                </Row>
                <Row className="input-customize">
                    <input type="password"  className="form-control" placeholder="Confirmez le mot de passe" id="mdp2"></input>
                </Row>
                <Row className="form-group form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                    <label className="form-check-label" for="confirm" >Je confirme ces informations</label>
                </Row>
                <Button className="btn-customize " type="submit" id="submit" disabled >Inscription</Button>{/* fetch fonctionne mieux avec un a */}
>>>>>>> Stashed changes
            </form>
            
        </div>
    ) 


}

export default Inscription;
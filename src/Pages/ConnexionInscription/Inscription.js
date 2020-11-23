import React,{useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchInsc";
import "./ConnexionInscription.css";
/* import verif from "./verifInsc" */


const Inscription=()=>{
    
    useEffect(() => {{/* fetch fonctionne mieux avec un a */}
       fetchie() //utilisation de la fonction qui contient le fetch dans fetchInsc
      /*  verif() *///js de verification de validité du form
    })
    
    return(
        <div>
            <form  id="form" method="POST"  >
                <Row className="input-customize">
                    <input type="text" placeholder="Nom" name="Nom" id="Nom" ></input>
                </Row>
                <Row className="input-customize">
                    <input type="text" placeholder="Prenom" name="Prenom" id="Prenom" ></input>
                </Row>
                <Row className="input-customize">
                    <input type="mail" placeholder="Adresse Mail" name="email" id="email"  ></input>
                </Row>
                <Row className="input-customize">
                    <input type="password" placeholder="Mot de Passe" name="Password" id="Password"></input>
                </Row>
                <Row className="input-customize">
                    <input type="password" placeholder="Confirmez le mot de passe" id="mdp2"></input>
                </Row>
                <Button className="btn-customize" type="submit" id="submit" href="">Inscription</Button>{/* fetch fonctionne mieux avec un a */}
            </form>
        </div>
    ) 


}

export default Inscription;
import React,{useState,useEffect}  from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchConn";
import eye from "./eye"
import "./ConnexionInscription.css";

const Connexion = () =>{
    useEffect(() => {// hooks de fetch
        fetchie()//utilisation de la fonction qui contient le fetch dans fetchConn
        eye()
    })
    return(
        <div>{/* ne pas toucher aux id sinon plus de fetch */}
            <Row className="input-customize">
                <input type="email" placeholder="Adresse Mail" name="email" id="email"></input>
            </Row>    
            <Row className="input-customize">
                <input type="password" placeholder="Mot de passe" name="Password" id="Password"></input>
                <span  class="fa fa-fw fa-eye fa-eye-slash field-icon toggle-password"></span>
            </Row>
            <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                <Button  id="submit" className="btn-customize">Go !</Button>{/* fetch fonctionne mieux avec un a */}
            </Row>
            <p id="erreur"></p>
        </div>
    )
}

export default Connexion;
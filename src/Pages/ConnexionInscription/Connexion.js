import React,{useState,useEffect}  from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchConn";
import "./ConnexionInscription.css";

const Connexion = () =>{
    useEffect(() => {// hooks de fetch
        fetchie()//utilisation de la fonction qui contient le fetch dans fetchConn
    })
    return(
        <div>{/* ne pas toucher aux id sinon plus de fetch */}
            <Row className="input-customize">
                <input type="email" placeholder="Adresse Mail" id="email"></input>
            </Row>    
            <Row className="input-customize">
                <input type="password" placeholder="Mot de passe" id="Password"></input>
            </Row>
            <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                <Button type="submit" id="submit" className="btn-customize">Go !</Button>{/* fetch fonctionne mieux avec un a */}
            </Row>
        </div>
    )
}

export default Connexion;
import React,{useState,useEffect}  from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchConn";

const Connexion = () =>{
    useEffect(() => {// hooks de fetch
        fetchie()//utilisation de la fonction qui contient le fetch dans fetchConn
    })
    return(
        <div>{/* ne pas toucher aux id sinon plu de fetch */}
            <Row className="input-customize">
                <input type="text" placeholder="Adresse Mail" id="email"></input>
                <input type="text" placeholder="Mot de passe" id="Password"></input>
            </Row>
            <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                <Button id="submit">Connexion</Button>{/* fetch fonctionne mieux avec un a */}
            </Row>
        </div>
    )
}

export default Connexion;
import React,{useState,useEffect}  from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchConn";

const Connexion = () =>{
    useEffect(() => {
        fetchie()
    })
    return(
        <div>
            <Row className="input-customize">
                <input type="text" placeholder="Adresse Mail" id="email"></input>
                <input type="text" placeholder="Mot de passe" id="Password"></input>
            </Row>
            <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                <Button id="submit">Connexion</Button>
            </Row>
        </div>
    )
}

export default Connexion;
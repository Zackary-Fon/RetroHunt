import React, {useState} from "react"
import Connexion from "./Connexion.js";
import Inscription from "./Inscription.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ConnexionInscription.css";

const ConnexionInscription = () =>{
    const [switcher, isTrou] = useState(false);
    
    const Michel = () =>{
        isTrou(!switcher)
    }

    if (switcher == false){
    return(
        <>
        <Container className="container-customize">
            <div className="container_resize">
                <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center h2">Se connecter</Row>
                <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                    <Col md="auto" sm="auto" xs="auto" className="col-customize"><Connexion/></Col>
                </Row>
                <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                    <Col md="auto" sm="auto" xs="auto"><span>Pas encore inscrit ? <a onClick={Michel} className="link-customize">S'inscrire</a></span></Col>
                </Row>
            </div>
        </Container>
        </>
    )
    }else{
        return(
            <Container className="container-customize">
                <div className="container_resize">
                    <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center h2">S'inscrire</Row>
                    <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                        <Col md="auto" sm="auto" xs="auto" className="col-customize"><Inscription/></Col>
                    </Row>
                    <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                        <Col md="auto" sm="auto" xs="auto"><span>Déjà inscrit ?  <a onClick={Michel} className="link-customize">Se connecter</a></span></Col>
                    </Row>
                </div>
            </Container>
        )
    }

}

export default ConnexionInscription;




import "./Profil.css"
import {Link} from "react-router-dom";
import React,{useEffect} from "react";
import fetcha from "./FetchProfile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profil = () => {

    useEffect(()=>{
        fetcha();
       
           // fetchu();
            
    })
    
    return(

        <Container className="Card ">

            <Row className="CardHeader" lg={12} xs={6}>
                <Col className="back_btn" md={3} xs={12}><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></Col>
                <Col md={6} xs={12}><h2 className="profil_title" >Mon Profil</h2></Col>
                <Col md={3} xs={12}>
                    <div className="modificationProfil">
                        <Row className="justify-content-center"><Link to="/DeleteProfile" className="delete">Supprimer mon compte</Link></Row>
                    </div>
                </Col>
            </Row>

            <Row className="Infos justify-content-center align-items-center">
                <Col md={4} xs={12} ><Row xs={8} className="justify-content-center"><div id="avatar"></div></Row></Col>
                <Col md={6} xs={12} className="justify-content-center"> 
                    <div id="info" className="infos text-left"> 
                        <p id="prenom" className="firstname mb-0"></p>
                        <p id="nom" className="name mb-0"></p>
                        <p id="email" className="email mb-0"></p>
                        <p id="localisation"></p>
                    </div>
                </Col>
            </Row>
            <div className="Conversations">
            </div> 
            <div className="Annonces">
            </div>
        </Container>
    )
}

export default Profil;
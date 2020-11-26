import React from "react";
import Card from "./Card.js";
import './AjouterAnnonce.css';
import Container from 'react-bootstrap/Container';

const AjouterAnnonce = () =>{

    return(
      <Container>
          <p className="breadcrumb">Accueil - Ajouter une annonce</p>
          <Card/>
      </Container>
    )
}
export default AjouterAnnonce;
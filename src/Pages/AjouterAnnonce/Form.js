import React,{useEffect} from "react";/* 
import  Ajout from "./fetchEnvAnn"; */
import  recup from "./recup";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AjouterAnnonce.css';
import {Link} from "react-router-dom";
import fetcho from './fetcho'

const Formulaire = () =>{
    useEffect(() => {
       /*  Ajout() */
        recup()
        fetcho()
    })


    return(
    <div>
        <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
        <Form id="form"  className="form" method='POST' enctype="multipart/form-data">
            <h2 className="title">Ajouter une annonce</h2>


            <Row className="row_customize justify-content-center ">
                <h3>Ajouter des photos de l'article</h3>
                <div id="photo"></div>
                <Form.Control type="file" name="photo-send" id="photo-send" className="input-custom input-photo"/>
            </Row>
            
            <Row className="row_customize">
                <Form.Label for="titreAnnonce">Titre de l'annonce </Form.Label>
                <Form.Control type="text" name="TitreAnnonce" id="TitreAnnonce" className="input-custom"></Form.Control>
            </Row>

            <Row className="row_customize">
                <Form.Label for="date">Année de Sortie </Form.Label>
                <Form.Control type="text" name="Date" id="Date" className="input-custom"></Form.Control>
            </Row>

            <Row className="row_customize">
                <Form.Label for="Prix">Prix</Form.Label>
                <Form.Control type="text" name="Prix" id="Prix" className="input-custom"></Form.Control>
            </Row>

            <Row className="row_customize">
                    <Form.Label for="Etat">Etat</Form.Label>
                    <Form.Control type="text"as="select" name="Etat" id="Etat" className="input-custom">
                        <option value=" "> </option>
                        <option value="neuf">Neuf(sous blister)</option>
                        <option value="tresBon"> Très bon (sans blister et pas de défaut sur la boite)</option>
                        <option value="bon">Bon(petits défaut sur la boite signalés en photo)</option>
                        <option value="moyen">Moyen(défauts sur la boite et/ou le jeu signalés en photo)</option>
                        <option value="mauvais">mauvais( défauts sur la boite et le jeu signalés en photo)</option>
                        <option value="NoB">Pas de boite et jeu en bon état</option>
                        <option value="NoM">Pas de boite et jeu avec défauts (signalé en photo)</option>
                    </Form.Control>
            </Row>

            <Row className="row_customize">
                    <Form.Label for="Console">Console</Form.Label>
                    <Form.Control type="text" as="select" name="Console" id="console" className="input-custom">
                        <option value=" "> </option>
                        <option value="play1">Playstation 1</option>
                        <option value="play2">Playstation 2</option>
                        <option value="xbox">Xbox</option>
                        <option value="GameCube">Gamecube</option>
                        <option value="N64">Nintendo 64</option>
                        <option value="NES">Nes</option>
                        <option value="MegaDrive">MegaDrive</option>
                        <option value="GameBoy">GameBoy</option>
                        <option value="SuperNes">Super Nes</option>
                        <option value="NEOGEO">NEO GEO </option>
                        <option value="Atari">Atari</option>
                    </Form.Control>
            </Row>
        

            <Row className="justify-content-center column" >
                <label for="description" id="description"><h3>Description de l'article</h3></label>
                <Form.Control  as="textarea" id="description" name="description" rows="7" ></Form.Control>
            </Row>

            <div className="addAnonce_div"><Button type="submit" id="submit" className="btn addAnonce_btn">Ajouter l'annonce</Button></div>
        </Form>
    </div>
    )
}
export default Formulaire;
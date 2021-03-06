import React,{useEffect} from "react";
import  Apercu from "./Apercu"; 
import  recup from "./recup";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AjouterAnnonce.css';
import {Link} from "react-router-dom";
import fetcho from './fetcho';
import verif from "./verifAnnonce";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip"

const Formulaire = () =>{
    useEffect(() => {
       Apercu()  //apercu mdp
        recup() //recup avec token 
        fetcho() //envoie de l annonce
        verif() //verif de l annonce
    })
    const renderTooltip = props => (
        <Tooltip {...props}>La date doit être comprise entre 1900 et 2010</Tooltip>
      );

    return(
    <div> {/* probleme si label et input pas en html */}
        <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
        <form id="myForm"  className="form" method='POST' enctype="multipart/form-data">{/* laisser id */}
            <h2 className="title">Ajouter une annonce</h2>


            <Row className="row_customize justify-content-center ">
                <h3>Ajouter des photos de l'article</h3>
                <div id="imagePreview"></div> {/* laisser id */}
                <img src="" alt="Image Previex"   
						class="image-preview__image" id="imagePreview" />{/* laisser id et class*/}
                        
                <input type="file" name="image" id="image" className="input-custom input-photo" accept="image/png,image/jpg, image/jpeg" multiple/> {/* laisser TOUT */}
                <p id="photoPasOK">Veuillez choisir le bon format: jpg, jpeg ou png</p>
            </Row>
            
            <Row className="row_customize">
                <label for="titreAnnonce">Titre de l'annonce </label> 
                <input type="text" name="TitreAnnonce" id="TitreAnnonce" className="input-custom form-check-input"></input>
            </Row>

            <Row className="row_customize">
                <Form.Label for="date">Année de Sortie </Form.Label> 
                <input type="Number" min="1900" max="2015" name="Date" id="Date" className="input-custom form-check-input"></input>
                <OverlayTrigger placement="top" overlay={renderTooltip}>
                <Button>?</Button>
                </OverlayTrigger>
            </Row>

            <Row className="row_customize">
                <Form.Label for="Prix">Prix</Form.Label> 
                <input type="number" name="Prix" id="Prix" className="input-custom form-check-input"></input>
                
            </Row>

            <Row className="row_customize"> 
                    <Form.Label for="Etat">Etat</Form.Label> 
                    <Link to={`/Referentiel`}> Mieux comprendre</Link>
                    <select  name="Etat" id="Etat" className="input-custom">
                        <option value=" "> </option>
                        <option value="Impeccable">Presque neuf / Immaculé / État impeccable</option>
                        <option value="Bon"> Presque parfait / Bon état</option>
                        <option value="moyen">Moyen / État acceptable</option>
                        <option value="moyen">Désastreux / Mauvais état</option>
                        </select>
            </Row>

            <Row className="row_customize">
                    <Form.Label for="Console">Console</Form.Label> 
                    <select type="text" as="select" name="Console" id="console" className="input-custom">
                        <option value=" "> </option>
                        <option value="Playstation 1">Playstation 1</option>
                        <option value="Playstation 2">Playstation 2</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Gamecube">Gamecube</option>
                        <option value="Nintendo 64">Nintendo 64</option>
                        <option value="Nes">Nes</option>
                        <option value="MegaDrive">MegaDrive</option>
                        <option value="Gameboy">GameBoy</option>
                        <option value="Super Nes">Super Nes</option>
                        <option value="Neo Geo">NEO GEO </option>
                        <option value="Atari">Atari</option>
                    </select>
            </Row>
        

            <Row className="justify-content-center column" >
                <label for="description" id="Description"><h3>Description de l'article</h3></label>
                <textarea id="description" name="description" rows="7" ></textarea>
            </Row>
            <input type="text" name="loc" id="loc"></input> {/* pas touche a sa */}
            <input type="text" name="mv" id="mv"></input>
            
            
            
            <div className="addAnonce_div"><Button  id="submit" className="btn addAnonce_btn"disabled>Ajouter l'annonce</Button></div> {/* NE PAS METTRE DE INPUT SUBMIT */}
        </form>
    </div>
    )
}
export default Formulaire;
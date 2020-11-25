import React,{useEffect} from "react";
import  Ajout from "./fetchEnvAnn";
import  RecupPlay from "./fetchEnvAnn";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import './Form.css';
import {Link} from "react-router-dom";

const Form = () =>{
    useEffect(() => {
        Ajout()
        RecupPlay()
    })


    return(
    <div>
        <Link className="Retour" to="/">Retour</Link>
        <form id="myForm" method='POST' enctype="multipart/form-data">
            <h2 className="Tt">Ajouter une annonce</h2>
            <Row>
            <h4 id="Art">Ajouter des photos de l'article</h4>
            <div id="photo"></div>
    <input type="file" name="image" id="image" className="input-customize input-photo"/> 
    </Row>
    <Row>
        <Col xs={2} className="center">
    <label for="titreAnnonce">Titre de l'annonce </label>
    <input type="text" name="TitreAnnonce" id="TitreAnnonce" className="input-customize"></input>
    
    <label for="date">Année de Sortie </label>
    <input type="text" name="Date" id="Date" className="input-customize"></input>
    
    <label for="Prix">Prix</label>
    <input type="text" name="Prix" id="Prix" className="input-customize"></input>
    
    <label for="Etat">Etat</label>
    <select name="Etat" id="Etat" className="input-customize">
    <option value=" "> </option>
        <option value="neuf">Neuf(sous blister)</option>
        <option value="tresBon"> Très bon (sans blister et pas de défaut sur la boite)</option>
        <option value="bon">Bon(petits défaut sur la boite signalés en photo)</option>
        <option value="moyen">Moyen(défauts sur la boite et/ou le jeu signalés en photo)</option>
        <option value="mauvais">mauvais( défauts sur la boite et le jeu signalés en photo)</option>
        <option value="NoB">Pas de boite et jeu en bon état</option>
        <option value="NoM">Pas de boite et jeu avec défauts (signalé en photo)</option>
    </select>
    <label for="Console">Console</label>
    <select name="Console" id="console" className="input-customize">
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
    </select>
    </Col>
    </Row>
    <Row>
    <label for="description" id="Art"><h2>Description de l'article</h2></label>
    <textarea  id="description" name="description" rows="5" cols="33"className="center"></textarea>
    </Row>
    <button type="submit" id="submit" className="btn btn-outline-light">Ajouter l'annonce</button>
    </form>
    </div>
    )
}
export default Form;
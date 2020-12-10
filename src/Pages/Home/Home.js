import React,{useEffect} from "react";
import Recent from "./Recent";
import './Home.css';
/* import GetUser from './../../fetch.js'; */
import chevronGauche from "../../Images/chevronGauche.png";
import chevronDroite from "../../Images/chevronDroite.png";
import chevronHaut from "../../Images/chevronHaut.png";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import home from "./../../Images/home.png";
import Card from "./CardNew";

const Home = () => {
    
    return (
    <div className="homeBody">
        <Row>
            <Col><img class="us" src={home} /></Col>
            <Col className="center"><p className="nous">Qui nous sommes:<br></br>
            3 grand passionnés de retro gaming qui pensent que, comme tout le monde, rechercher sur internet ne doit pas prendre des heures. 
            Alors ici se trouve une communauté qui partage la même passion! <br></br>
            </p></Col>
        </Row>
        <Row>
            <h2 className="title">Les derniers articles</h2>
        </Row>
        <Recent/>
        <Card/>
    </div>);
}

export default Home;
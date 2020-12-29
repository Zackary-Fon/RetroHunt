import React,{useEffect} from "react";
import Recent from "./Recent";
import './Home.css';
/* import GetUser from './../../fetch.js'; */
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import home from "./../../Images/home.png";
import Card from "./CardNew";

const Home = () => {
    
    return (
        <div className="homeBody">
            <Row className="justify-content-center align-items-center">
                <Col className="d-flex justify-content-center align-items-center"><img src={home} /></Col>
                <Col className="center aboutUs">
                    <p className="text-left">RetroHunt c'est quoi?<br></br>
                    Ici se trouve une communautée qui partage la même passion! Vendez et achetez ce que vous ne trouverez plus ailleurs !
                    </p>
                </Col>
            </Row>
            <div className="bcgrd"></div>
            {/* <Row>
                <Col className="center aboutUs">
                    <p className="text-left">Qui sommes nous?<br></br>
                            Nous sommes des  passionnés de retro gaming qui pensent que, comme tout le monde, rechercher sur internet ne doit pas prendre des heures. 
                            Alors ici se trouve une communautée qui partage la même passion!
                    </p>
                </Col>
            </Row> */}
            <Row className="justify-content-center">
                <h2 className="title margin_custom">Les derniers articles</h2>
            </Row>
            <Recent/>
            <Card/>
        </div>
    );
}

export default Home;
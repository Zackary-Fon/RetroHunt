import React from "react";
import facebook from '../Images/facebook.svg';
import twitter from '../Images/twitter.svg';
import linkedin from '../Images/linkedin.svg';
import MentionLegale from "./MentionLegale";
import LogoFooter from "./LogoFooter";
import './Footer.css';
import Col from 'react-bootstrap/Col';

import Row from "react-bootstrap/Row";

const Footer=()=>{

    const icones=[facebook,linkedin];

    const afficheur=icones.map((any, index)=>
    <div className="Footer" key={index}><img src={any} alt="réseaux sociaux"/></div>);
    return (
        <div className="d-flex flex-column">
        <footer className="footer" >
            <Row className="p">
                <Col xs={6}>
                    <h5 className="Mentions mx-auto d-block">Site crée par Zackary, Benoit et Justine</h5>
                </Col>
                <Col>
                <MentionLegale/>
                </Col>
                <Col>
                <img className="Footer" src={facebook} alt="réseaux sociaux"></img>
                {/* {afficheur} */}
                
                <img className="Footer" src={linkedin} alt="réseaux sociaux"></img>
                </Col>
            </Row>
    </footer>
    </div>
    )
}

export default Footer;
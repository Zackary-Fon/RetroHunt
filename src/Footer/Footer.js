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
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            <p class="text-justify">Site crée par Zackary, Benoît et Justine</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">Mentions legales</a></li>
                                <li>Nous contacter: <a href="#">liencontact@gmail.com</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        {/* <footer className="footer" >
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
                
               {/*  <img className="Footer" src={linkedin} alt="réseaux sociaux"></img>
                </Col>
            </Row>
    </footer> */}
    
    </div>
    )}

export default Footer;
import React from "react";
import facebook from '../Images/facebook.svg';
import linkedin from '../Images/linkedin.svg';
import './Footer.css';

const Footer=()=>{

    const icones=[facebook,linkedin];

    const afficheur=icones.map((any, index)=>
    <div className="Footer" key={index}><img src={any} alt="réseaux sociaux"/></div>);
    return (
        <div >
            <div className="padding-footer"></div>
            <footer class="site-footer">
                <div class="">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-4">
                            <p class="text-justify">Site crée par Zackary, Benoît et Justine</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/">Mentions legales</a></li>
                                <li> <a href="mailto:retrohunto@gmail.com">Nous contacter</a></li>
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
    </div>
    )}

export default Footer;
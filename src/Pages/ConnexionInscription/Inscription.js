import React,{useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import  fetchie from "./fetchInsc";
import "./ConnexionInscription.css";
 import verif from "./verifInsc" ;
import eye from './eye';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip"

const Inscription=()=>{
    
    useEffect(() => {{/* fetch fonctionne mieux avec un a */}
       fetchie() //utilisation de la fonction qui contient le fetch dans fetchInsc
        verif() ///js de verification de validité du form
        eye()
    })
    
    const renderTooltip = props => (
        <Tooltip {...props}>Le mot de passe doit contenir uen majuscule,
        une chiffre , un caractere special et doit contenir 8 caracteres</Tooltip>
      );

    return(
        <div>
            <p id="error"></p>
            <form  id="form" method="POST"  >
                <Row className="input-customize">
                    <input type="text" className="form-control" placeholder="Nom" name="Nom" id="Nom" ></input>
                </Row>
                <Row className="input-customize">
                    <input type="text" className="form-control" placeholder="Prenom" name="Prenom" id="Prenom" ></input>
                </Row>
                <Row className="input-customize">
                    <input type="mail"  className="form-control" placeholder="Adresse Mail" name="email" id="email"  ></input>
                </Row>
                <Row className="input-customize">
                    <input type="password" className="form-control" placeholder="Mot de Passe" name="Password" id="Password"></input>
                    </Row>
                <Row>
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                        <Button>?</Button>
                    </OverlayTrigger>
                </Row>
                <div id="eyes">
                    <span  class="fa fa-fw fa-eye fa-eye-slash field-icon toggle-password"></span>
                </div>
                <Row className="input-customize">
                    <input type="password"  className="form-control" placeholder="Confirmez le mot de passe" id="mdp2"></input>
                </Row>
                <Row className="form-group form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
                    <label className="form-check-label" for="confirm" >Je confirme ces informations</label>
                </Row>
                <Button className="btn-customize "  id="submit" disabled >Inscription</Button>{/* fetch fonctionne mieux avec un a */}
            </form>
        </div>
    ) 


}

export default Inscription;
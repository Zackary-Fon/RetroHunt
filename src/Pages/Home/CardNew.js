import React from "react";
import Col from 'react-bootstrap/Col';
import mario from "./../../Images/Super-Mario-3D-All-Stars.jpg";
import './Home.css';

const Card = () =>{

    return(
        <div className="contain-customize">
            <div>
                <Col><img src={mario} className="mario"/></Col>
                <Col><p>Super Mario 3D All Stars : <br></br>
                La manette GameCube enfin compatible avec la nouvelle mise à jour</p></Col>
            </div>
        </div>
    )
}

export default Card;
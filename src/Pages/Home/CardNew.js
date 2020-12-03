import React from "react";
import Col from 'react-bootstrap/Col';
import mario from "./../../Images/Super-Mario-3D-All-Stars.jpg";
import './Home.css';

const Card = () =>{

    return(
        <div className="Card">
            <div>
                <h2>News</h2>
                <Col><img src={mario} className="mario"/></Col>
                <Col><p  className="News"><h3>Super Mario 3D All Stars : </h3><br></br>
                La manette GameCube enfin compatible avec la nouvelle mise à jour</p></Col>
            </div>
        </div>
    )
}

export default Card;
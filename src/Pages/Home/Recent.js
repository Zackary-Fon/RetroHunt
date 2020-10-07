import React from "react";
import {Link} from "react-router-dom";
import {ObjectProduct} from "../../Rooting/const"
import './Home.css';

const Recent = () => {
    const Articles = ObjectProduct.map((produit)=>{
        return (
            <li key={produit.id} className="imageIntitule">
                <div className="imageProduit" style={{background: `url(${produit.img})`, backgroundRepeat:"no-repeat", backgroundPositionX:"center", backgroundSize:"cover"}}/>
                <div className="intituleAnnonce">
                    <h3>titre: {produit.name}</h3>
                    <h3>console: {produit.category}</h3>
                    <p>posté par: {produit.userName}</p>
                    <p>posté le: {produit.datePost}</p>
                    <h1>prix : {produit.prix}</h1>
                <Link to={`/Product/${produit.id}`}><div className="boutonArticle">Voir la fiche</div></Link>
                </div>
            </li>
        )
    })

    return (
        <div className="bodyRecent" >
            <ul className="listArticles">{Articles}</ul>
        </div>

    )
}
export default Recent;
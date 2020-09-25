import React from "react";
import {Link} from "react-router-dom";
import {ObjectProduct} from "../../Rooting/const"
import './Home.css';

const Recent = () => {
    const Articles = ObjectProduct.map((produit)=>{
        return (
            <li key={produit.id} className="imageIntitule">
                <img className="imageProduit" src={produit.img} alt="produit"/>
                <div className="intituleAnnonce">
                    titre: {produit.name} console: {produit.category} posté par: {produit.userName} posté le: {produit.datePost} prix : {produit.prix}
                </div>
                <Link to={`/Product/${produit.id}`}>Voir la fiche article</Link>
            </li>
        )
    })

    return (
        <div className="bodyRecent" >
            <div className="moreRecent">Les dernières annonces</div>
            <ul className="listArticles">{Articles}</ul>
        </div>
    )
}
export default Recent;
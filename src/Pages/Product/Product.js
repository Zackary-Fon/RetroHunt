import React,{useEffect,useState} from "react";
import {ObjectProduct} from "../../Rooting/const";
import './Product.css';
import {Link} from "react-router-dom";
import chevronGauche from "../../Images/chevronGauche.png";
import chevronDroite from "../../Images/chevronDroite.png";

const Product = ({match}) => {
    console.log(match.params.id)
     const[data,setdata]=useState([]);
     const user={
         _id:match.params.id
     };
     
     const formjs=JSON.stringify(user)
    useEffect(async () => {
        fetch("http://localhost:3006/id",{ method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/id"
        },body:formjs
                })
        .then(response => {response.json().then(json => {
            
            setdata(json)
        })})
    });
    console.log( data) 

    // recupérer id du produit
    const {params: id } = match;
    console.log(match);
    // afficher les infos
    console.log(id.id)
    const ShowProduct = () => {
        // récupérer dans le tableau les détails du produit avec un if pour correspondre à l'id
        //du produit sur lequel on a cliqué puis on affiche les informations et l'image dans une card
        // et on affiche la description que l'utilisateur à écrit sur une deuxième card
        const ProduitResult = data.map(produit => {
                return(
                    <div className="bodyProduct">
                        {/*Là on met le chemin comme sur le figma*/}

                        <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
                        <div className="Images">
                                <h1>{produit.Titre}</h1>
                                <img className="imageP" src={produit.image[0]} alt="produit"/>
                            </div>
                        <div className="Description">
                            <div className="Infos">
                                <p> Console : {produit.Console}</p>
                                <p>Prix : {produit.Prix}</p>
                                <p>Etat :</p>
                                <p>Vendeur : {produit.PseudoVendeur}</p>
                                <p>Description :<br></br> {produit.Description}</p>
                                
                            </div>
                            
                        </div>
                        <div id="contact">
                        <button className="bouton">Contacter le vendeur</button>
                        <Link id="chiant">Signaler l'annonce</Link>
                        </div>
                        
                        
                    </div>
                )
           
        })
        return ProduitResult
    }
    
    console.table(ObjectProduct);
    return (<div>
        {ShowProduct()}
        
    </div>)
}

export default Product;
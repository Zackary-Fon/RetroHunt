import React,{useEffect,useState} from "react";
import './Product.css';
import '../../general.css'
import {Link} from "react-router-dom";

const Product = ({match}) => {
    
    const[data,setdata]=useState([]);
    const user={
        _id:match.params.id
    };
    const formjs=JSON.stringify(user)
    useEffect(async () => {
        fetch("https://apiretrohunt.herokuapp.com/id",{ method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"https://apiretrohunt.herokuapp.com/id"
        },body:formjs
                }) //je recupere les annonces graces a leurs id
        .then(response => {response.json().then(json => {
            setdata(json)
        })})
    })

    // recupérer id du produit
    const {params: id } = match;
    // afficher les infos
    const ShowProduct = () => {
        // récupérer dans le tableau les détails du produit avec un if pour correspondre à l'id
        //du produit sur lequel on a cliqué puis on affiche les informations et l'image dans une card
        // et on affiche la description que l'utilisateur à écrit sur une deuxième card
        const ProduitResult = data.map(produit => {
                return(
                    <div className="bodyProduct">
                        {/*Là on met le chemin comme sur le figma*/}

                        <div className="back_btn"><Link to="../"><i class="fas fa-chevron-left"></i> Retour</Link></div>
                        <div className="Images">
                                <h1>{produit.Titre}</h1>
                                <img className="imageP" src={produit.image[0]} alt="produit"/>
                            </div>
                        <div className="Description">
                            <div className="Infos">
                                <p> Console : {produit.Console}</p>
                                <p>Prix : {produit.Prix}</p>
                                <p>Etat :{produit.Etat}</p>
                                <p>Vendeur : {produit.PseudoVendeur}</p>
                                <p>Description :<br></br> {produit.Description}</p>
                                
                            </div>
                            
                        </div>
                        <div id="contact">
                        <Link to ={`/Chat/${produit._id}`}>
                            <button className="bn"  id="con" >Contacter le vendeur</button>
                            </Link>
                            </div>
                        <Link id="chiant">Signaler l'annonce</Link>
                        
                    </div>
                )
        })
        return ProduitResult
    }
    
    return (<div>
        {ShowProduct()}
        
    </div>)
}

export default Product;
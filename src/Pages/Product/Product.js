import React from "react";
import './Product.css';
import '../../general.css'

const Product = ({match}) => {
    // recupérer id du produit
    const {params: id } = match;
    console.log(match);
    // afficher les infos
    console.log(id.id)
    const ShowProduct = () => {
        // récupérer dans le tableau les détails du produit avec un if pour correspondre à l'id
        //du produit sur lequel on a cliqué puis on affiche les informations et l'image dans une card
        // et on affiche la description que l'utilisateur à écrit sur une deuxième card
        const ProduitResult = tabObjet.map(produit => {
            if (produit._id === (String(id.id)) ){
                return(
                    <div className="bodyProduct">
                        {/*Là on met le chemin comme sur le figma*/}

                        <h3>Retour</h3>

                        <div className="DescriptionEtImages">
                            <div className="Infos">
                                <h2> Console : {produit.Console}</h2>
                                <h2>Prix : {produit.Prix}</h2>
                                <h2>Etat :</h2>
                                <h2>Vendeur : {produit.PseudoVendeur}</h2>
                                <h2>Description :</h2>
                                <div className="bouton">Contacter le vendeur</div>
                            </div>
                            <div className="Images">
                                <h1>{produit.Titre}</h1>
                                <img className="imageProduit" src={produit.Image} alt="produit"/>
                            </div>
                        </div>

                        <h3>Signaler l'annonce</h3>
                        
                    </div>
                )
            } else { return (null)}
        })
        return ProduitResult
    }
    
    console.table(ObjectProduct);
    return (<div>
        {ShowProduct()}
        
    </div>)
}

export default Product;
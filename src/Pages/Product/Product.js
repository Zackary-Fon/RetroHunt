import React from "react";
import {ObjectProduct} from "../../Rooting/const";

const Product = ({match}) => {
    const {params: id } = match;
    console.log(match);
    // recupérer id du produit
    // récupérer dans le tableau les détails du produit avec l'id en utilisation filter
    // afficher les infos
    console.log(id.id)
    const ShowProduct = () => {
        const ProduitResult = ObjectProduct.map(produit => {
            if (produit.id === (Number(id.id)) ){
                return(
                    <div>
                        {produit.name},
                        {produit.category},
                        posté par {produit.userName}
                        Le : {produit.datePost},
                        {produit.prix}
                        <img className="imageProduit" src={produit.img} alt="produit"/>
                    </div>
                )
            } else { return (null)}
        })
        return ProduitResult
    }
    
    console.table(ObjectProduct);
    return (<div>
        Produit
        {ShowProduct()}
        
    </div>)
}

export default Product;
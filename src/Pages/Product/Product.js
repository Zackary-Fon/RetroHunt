import React from "react";
import {ObjectProduct} from "../../Rooting/const";
import './Product.css';
import '../../general.css'

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
                    <div className="bodyProduct">
                        <div className="infoImage">
                            <div className="infos">
                                <h1>{produit.name}</h1>
                                <h2>{produit.category}</h2>
                                posté par {produit.userName}
                                <br/>
                                Le : {produit.datePost}
                                <h3>{produit.prix}</h3>
                            </div>
                            <img className="imageProduit" src={produit.img} alt="produit"/>
                            <div className="bouton">Contacter le vendeur</div>
                        </div>
                        <div className="description">
                            <h1>Description</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut dui efficitur, porttitor massa vitae, mattis ex. Aliquam vel nisl interdum, convallis massa eget, pretium nibh. Nam eu urna mauris. Duis ac diam malesuada, hendrerit ex non, consequat nisi. Sed tellus lorem, blandit et iaculis vitae, molestie ac justo. Duis at vulputate elit. Praesent pellentesque faucibus urna, faucibus cursus lectus ultrices id.
                        Suspendisse non lectus pretium metus blandit efficitur. Vivamus efficitur maximus turpis, ut dignissim nulla scelerisque in. Etiam porttitor arcu id lacus pulvinar pellentesque. Quisque tristique dui nisl, at porta odio interdum vel. Pellentesque sed sem vitae lectus viverra fringilla sit amet a mauris. Nunc vitae arcu ligula. Nullam eget turpis sit amet diam mattis sodales. Donec malesuada vel libero et consequat. Nullam id sapien ut ipsum interdum bibendum sed ut dolor.
                        </div>
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
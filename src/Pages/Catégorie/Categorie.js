import React from "react";
import {ObjectProduct} from "../../Rooting/const";
import {Link} from "react-router-dom";

const Categorie = ({match}) => {
    // recupérer category du produit
    const {params: category } = match;
    console.log(match);
    const ShowCategorie = () => {
        const categorieResult = ObjectProduct.map((produit) => {
            if (produit.category === (String(name.name)) ){
                return(
                    <li key={produit.id} className="imageIntitule">
                    <div className="imageProduit" style={{background: `url(${produit.img})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width:"100%", height:"200px"}}/>
                    <div className="intituleAnnonce">
                    <h1>{produit.name}</h1>
                    <h3>console: {produit.category}</h3>
                    <p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.userName}</p>
                    <p>posté le: {produit.datePost}</p>
                    <h4>prix : {produit.prix}</h4>
                    <Link to={`/Product/${produit.id}`}><div className="bouton">Voir la fiche</div></Link>
                    </div>
                    </li>
                )
            }
        })
        return (
            <div>
            {categorieResult}
            </div>
        )
    }
}
export default Categorie;
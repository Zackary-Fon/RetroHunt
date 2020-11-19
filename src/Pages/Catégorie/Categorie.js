import React from "react";
import {ObjectProduct} from "../../Rooting/const";
import tabRoutes from "../../Rooting/const";

const Categorie = ({match}) => {
    // recupérer category du produit
    const {params: category } = match;
    console.log(match);
    const ShowCategorie = () => {
        // récupérer dans le tableau les détails du produit avec un if pour correspondre à l'id
        //du produit sur lequel on a cliqué puis on affiche les informations et l'image dans une card
        // et on affiche la description que l'utilisateur à écrit sur une deuxième card
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
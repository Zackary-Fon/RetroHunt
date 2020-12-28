import React, {useState} from "react";
import Search,{AnnFilt} from "../../Header/Search";
import {Link} from "react-router-dom";


    const Searching = () =>{ //page d resultat de la barre de recherche
        const SearchResult = AnnFilt.map((produit) => {
            
            return(
                <li key={produit._id} className="imageIntitule">
                <div className="imageProduit" style={{background: `url(${produit.image[0]})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width:"100%", height:"200px"}}/>
                <div className="intituleAnnonce">
                <h1>{produit.Titre}</h1>
                <h3>console: {produit.Console}</h3>
                <p className="PersonPubli"> {produit.PseudoVendeur}</p>
                <h4>prix : {produit.Prix}</h4>
                <Link to={`/Product/${produit._id}`}><div className="bouton">Voir la fiche</div></Link>
                </div>
                </li>
            )
        
    })
return (
        <div className="Contain">
        {SearchResult}
        </div>
)

}

export default Searching;
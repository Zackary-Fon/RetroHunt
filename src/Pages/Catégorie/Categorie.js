import React, {useState, useEffect} from "react";
import {ObjectProduct} from "../../Rooting/const";
import {Link} from "react-router-dom";

const Categorie = ({match}) => {
    console.log(match)
    
     const[data,setdata]=useState([]);
     const user={
         title:match.params.title
     };
     
     const formjs=JSON.stringify(user)
    useEffect(async () => {
        fetch("http://localhost:3006/categorie",{ method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/categorie"
        },body:formjs
                })
        .then(response => {response.json().then(json => {
            
            setdata(json)
        })})
    }); 
    //console.log( data) 

    // recupérer id du produit
    const {params: title } = match;
    console.log(match);
    const categorieResult = data.map((produit) => {
            
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
            <div>
            {categorieResult}
            </div>
    )
    
}
export default Categorie;
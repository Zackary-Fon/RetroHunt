import React, {useState, useEffect} from "react";
import {ObjectProduct} from "../../Rooting/const";
import person from '../../Rooting/Icones/person.svg';
import {Link} from "react-router-dom";
import "./Categorie.css";

const Categorie = ({match}) => {
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
            //j recup  annonces de la consolee et  je lees mets dans data
            setdata(json)
        })})

    })

    // recupérer id du produit
    const {params: title } = match;
    const categorieResult = data.map((produit) => { //creation des cards
            
                return(
                <div key={produit._id} className="imageIntitule card card-custom">
                    <div className="imageProduit " > <div style={{background: `url(${produit.thumbnail[0]})`, backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"80%", height:"200px"}}></div> </div>
                    <div className="intituleAnnonce card-body">
                            <h1 className="card-title">{produit.Titre}</h1>
                            <ul className="list-group list-group-flush">
                                <li class="list-group-item"><p> {produit.Console}</p></li>
                                <li class="list-group-item"><p> {produit.Prix} €</p></li>
                                <li class="list-group-item"><p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.PseudoVendeur}</p></li>
                            </ul>
    
                        <div className="button_custom-width"><Link to={`/Product/${produit._id}`} className="bouton btn btn-primary">Voir la fiche</Link></div>
    
                    </div>
                </div>
                )
            
        })
    return ( //affichage des cards
            <div className="Contain">
            {categorieResult}
            </div>
    )
    
}
export default Categorie;
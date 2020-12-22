import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import chevronGauche from "../../Images/chevronGauche.png";
import chevronDroite from "../../Images/chevronDroite.png";

const Produit = ({match}) => {
    const[data,setdata]=useState([]);
    const user={
        _id:match.params.id
    };
    const formjs=JSON.stringify(user)
    useEffect(async () => {
        fetch("http://localhost:3006/idUser",{ method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"http://localhost:3006/idUser"
            },body:formjs
                })
        .then(response => {response.json().then(json => {
            setdata([json])
        })})
    });

    // recupérer id du produit
    const {params: id } = match;
    console.log(match)
    // afficher les infos
    const ShowProduct = () => {
        // récupérer dans le tableau les détails du produit avec un if pour correspondre à l'id
        //du produit sur lequel on a cliqué puis on affiche les informations et l'image dans une card
        // et on affiche la description que l'utilisateur à écrit sur une deuxième card
        const ProduitResult = data.map(produit => {
                return(
                    <div className="bodyProduct">

                        <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
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
                        <Link to={`/Contact/${produit.PseudoVendeur}`}><button className="bn">Contacter le vendeur</button></Link>
                        <Link id="chiant">Signaler l'annonce</Link>
                        </div>
                        
                        
                    </div>
                )
            
        })
        return ProduitResult
    }
    return (<div>
        {ShowProduct()}
        
    </div>)
}

export default Produit;
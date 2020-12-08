import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import chevronGauche from "../../Images/chevronGauche.png";
import chevronDroite from "../../Images/chevronDroite.png";
import fetche from "./fetchmodif"
import fetchy from "./fetchsuppAnn"
const Modification = ({match}) => {
    console.log(match.params.id)
     const[data,setdata]=useState([]);
     console.log(data)
     const user={
         _id:match.params.id
     };
    console.log(user)
    const formjs=JSON.stringify(user)
     
    useEffect( () => {
        
        fetch("http://localhost:3006/idUser",{ method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"http://localhost:3006/idUser"
        },body:formjs
                })
        .then(response => {response.json().then(json => {
            console.log(json)
            setdata([json])
        })})
        ;
    }
    )
    
    console.log(data) 

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
                    <div className="bodyProduct" >
                        {/*Là on met le chemin comme sur le figma*/}
                        <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
                        <form id="form" method='POST'enctype="multipart/form-data" >
                        
                        <div className="Images">
                                <textarea type="text" id="titre">{produit.Titre}</textarea>
                                <img className="imageP" src={produit.image[0]} alt="produit"/>
                            </div>
                        <div className="Description">
                            <div className="Infos">
                                <input type="hidden" id="ID" value={produit._id}/>
                                <textarea type="text" row='1' id="Console">{produit.Console}</textarea>
                                <textarea type="text" id="Prix">{produit.Prix}</textarea>
                                <textarea type="text" id="Etat">{produit.Etat}</textarea>
                                <textarea type="text" id="PseudoVendeur">{produit.PseudoVendeur}</textarea>
                                <textarea type="text" id="Description" >{produit.Description}</textarea>
                            </div>
                            
                        </div>
                        <div onClick={fetche} className="test" id="connard"> "enregistrer"</div>
                        <div onClick={fetchy} className="test" id="test"> supprimer</div>
                        </form>
                        
                    </div>
                )
        })
        return ProduitResult
    }
    return (<div>
        {ShowProduct()}
        
    </div>)
}

export default Modification;
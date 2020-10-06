import React from "react";
import InfosConnexion from "./Connexion/InfosConnexion";
import InscriptionForm from "./Inscription/InscriptionForm";

const ConnectioInscription =()=>{

    return (<div className="conninscri">
            <div className="items">
            <InfosConnexion/>
            </div>
            <div className="items">
            <InscriptionForm/>
        </div>
        </div>
        );
};
export default ConnectioInscription;



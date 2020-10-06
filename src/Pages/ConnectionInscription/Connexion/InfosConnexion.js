

import React from "react";
import BoutonConnexion from "./BoutonConnexion";
import FieldsConnexion from "./FieldsConnexion";
import PasswordForget from "./PasswordForget";
import PasswordConnexion from "./PasswordConnexion";
import InscriptionForm from "../Inscription/InscriptionForm";

const InfosConnexion = () => {
  return (<div>
      <div>
    <div>
      <h2>Connexion au compte</h2>
      <div>
        <FieldsConnexion />
      </div>
      <br />
      <div>
        <PasswordConnexion  />
      </div>
      <p>
        <BoutonConnexion />
        <PasswordForget/>
      </p>
    </div>
</div>
</div>
  );
};

export default InfosConnexion;



import React from "react";
import BoutonConnexion from "./BoutonConnexion";
import FieldsConnexion from "./FieldsConnexion";
import ForgetPassword from "./ForgetPassword";
import PasswordConnexion from "./PasswordConnexion";

const InfosConnexion = () => {
  return (
    <div>
      <div>
        <FieldsConnexion natextfield="" />
      </div>
      <br />
      <div>
        <PasswordConnexion natextfield="" />
      </div>
      <p>
        <BoutonConnexion />
        <ForgetPassword/>
      </p>
    </div>
  );
};

export default InfosConnexion;



import React from "react";

const FieldsConnexion = ({ namefield, textfield }) => {
  return (
    <div>
      <label for="name">Pseudo ou Email</label>
      <br />
      <input
        type="text"
        className="pseudo"
        placeholder="Pseudo ou Email"
      ></input>
    </div>
  );
};

export default FieldsConnexion;

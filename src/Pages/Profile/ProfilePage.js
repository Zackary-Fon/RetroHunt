


import React, { useState } from "react";
import AvatarProfile from "./AvatarProfile";
import ButtonProfile from "./ButtonProfile";
import ProfileName from "./ProfileName";

const ProfilePage = ({ Bonjour }) => {
  //const [cours, aller] = useState(true);

  //const jour = () => {
  //aller(true);
  //};

  return (
    <div className="profileGlobal">
      <div className="Photoprofile">
        <AvatarProfile />
      </div>
      <div>
        <ProfileName />
      </div>
      <div className="modifavatar">
        <ButtonProfile text="Modifier Avatar" />
      </div>
      <div className="modifpassword">
        <ButtonProfile text="Modifier mot de passe" />
      </div>
      <div className="mesannonces">
        <ButtonProfile text="Mes annonces" />
      </div>
      <div className="creationannonces">
        <ButtonProfile text="Créer une annonce" />
      </div>
      <div className="mesachats">
        <ButtonProfile text="Mes achats" />
      </div>
      <div className="deconnexion">
        <ButtonProfile text="Déconnexion" />
      </div>
    </div>
  );
};

export default ProfilePage;

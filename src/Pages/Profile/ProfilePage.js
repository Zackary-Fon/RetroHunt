


import React, { useState } from "react";
import AvatarProfile from "./AvatarProfile";
import ButtonProfile from "./ButtonProfile";
import ProfileName from "./ProfileName";

import "./Profile.css";


const ProfilePage = ({ Bonjour }) => {
 

  return (
    <div className="pageprofile">

            <div className="name-photo">

                    <div className="Photoprofile">
                        <AvatarProfile />
                    </div>

                    <div class="name-profile">
                      <ProfileName />
                    </div>

                    <div className="modifavatar">
                        <ButtonProfile text="Modifier Avatar" />
                      </div>

                      <div className="modifpassword">
                        <ButtonProfile text="Modifier mot de passe" />
                      </div>

              </div>
                <div className="mesboutons">

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
    </div>
  );
};

export default ProfilePage;

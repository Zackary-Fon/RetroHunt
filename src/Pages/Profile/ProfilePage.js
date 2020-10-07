


import React, { useState } from "react";
import AvatarProfile from "./AvatarProfile";
import ButtonProfile from "./ButtonProfile";
import ProfileName from "./ProfileName";

import "./Profile.css";


const ProfilePage = ({ Bonjour }) => {
 

  return (<div>
    
    <div className="infos">

          <div className="parentsection">
                  <div className="section"> Profile  <div className="Photoprofile">

                        <AvatarProfile />
                    </div>
                    <div class="name-profile">
                      <ProfileName />
                    </div>
                    <div className="modifavatar">
                        <ButtonProfile text="Modifier Avatar" />
                      </div>
                    </div>
                  <div className="section">Mes annonces
                  <div className="modifpassword">
                        <ButtonProfile text="Modifier mot de passe" />
                      </div>
                      <div className="creationannonces">
                          <ButtonProfile text="Créer une annonce" />
                          <div className="mesannonces">
                          <ButtonProfile text="Mes annonces" />
                          <div className="creationannonces">
                          <ButtonProfile text="Créer une annonce" />
                        </div>
                        </div>
                      </div>
                        </div>

                  </div>
                  <div className="section">MesAchats
                  <div className="mesachats">
                            <ButtonProfile text="Mes achats" />
                        </div>
                  </div>
  
                </div>     

                        <div className="deconnexion">
                          <ButtonProfile text="Déconnexion" />
                        </div>
                        </div>
              
  );
};

export default ProfilePage;

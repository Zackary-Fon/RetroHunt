


import React, { useState } from "react";
import AvatarProfile from "./AvatarProfile";
import ButtonProfile from "./ButtonProfile";
import ProfileName from "./ProfileName";

import "./Profile.css";


const ProfilePage = ({ Bonjour }) => {
 

  return (<div class="page">

            <div class="profile">
          
                    <div class="profileGauche"><p class="m">Menu Profile</p>
                        <p class="acces-menu">Cette partie va nous servir de menu profile
                        </p>
                    </div>
                    <div class="cadre">
                          <div class="infosProfile">
                            
                          <div class="Image_Profile">Photo</div>
                          <div class="InfosperosProfiles">Nom <br/><input typ="text" name="nom"/>
                        <br/>
                        Prenom <br/><input typ="text" name="nom"/></div>
                    <div class="ModiAvatar"><button value="modifier" class="mybouton">Modifier votre avatar</button></div> 
                        
            </div>
            </div> 
            </div>
          
            <div class="annonceglobale">
                <div class="annoncesGauche"><p class="a">Annonces</p></div>
                <div class="cadre1">
                    <div class="infosannonces">
                     <div class="paragraphe1annonce"><p class="creer">Annonces du jour</p>
                        <p class="depot">On affichera nos annonces  du jour.</p>
                    </div>
                    </div>
                     <div class="annonnce2"><p class="creer">Creer vos annonces</p><p class="depot">Ici vous deposerez vos articles à vendre</p></div>
                     </div>
                     </div>
            
            
            <div class="mesachats">
            <div class="mesAchatsgauche"><p class="achat">Mes Achats</p></div>
                    <div class="VueAchat">
                        <p class="creer">Historique des achats</p>
                    </div>
            </div>
        </div>
  );
};

export default ProfilePage;



import React from "react";
import profile from "./profile.png";
const AvatarProfile = () => {
  return (
    <div className="avatar">
      <div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default AvatarProfile;

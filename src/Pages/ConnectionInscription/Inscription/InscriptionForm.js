

import React from "react";
import ButtonInscription from "./ButtonInscription";
import "./Inscription.css";

const InscriptionForm = ({text}) => {
  return <div className="inscription">
      <h2>Inscription au site </h2>
                <div>
                Email<br />
                <input type="email" className="Nominscrit" maxLength="100">
                  {text}
                      </input>
          <div/>
        <br />
            <div>
      Confirmation Email<br />
      <input type="email" className="Nominscrit" maxLength="100">
      {text}
      </input>
      </div>
<br />
<p class="boutoninscrit">
<ButtonInscription/>
</p>
</div>
</div>
};

export default InscriptionForm;

import react from "react"

import {Link} from "react-router-dom";

const contact =()=>{

    return(
        <div> {/* probleme si label et input pas en html */}
            <div className="back_btn"><Link to="/"><i class="fas fa-chevron-left"></i> Retour</Link></div>
            <form id="myForm"  className="form" method='POST' enctype="multipart/form-data">{/* laisser id */}
            <h3>Formulaire de contact</h3>
                <h4>Contacter </h4>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus />
           
          
                <input placeholder="Your Email Address" type="email" tabindex="2" required />
            
                <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3"  />
            
            
                <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
            
                <button name="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            
            </form>
        </div>
        )
        }

export default contact
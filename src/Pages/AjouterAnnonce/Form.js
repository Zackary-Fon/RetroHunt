import React from "react";
import {TabForm} from "../../Rooting/const.js";

const Form = () =>{

    const listForm = TabForm.map( (truc) => {
    return(
    <div>
    <h2>{truc.name}</h2>
    <input type="send"/>
    </div>
    )
    })

    return listForm;
    
}
export default Form;
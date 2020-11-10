import React from "react";
import TabForm from "../../Rooting/const.js";

const Form = () =>{

    const ListForm = TabForm.map( (truc) => {
    <div>
    <h2>{truc.name}</h2>
    <input type="send"/>
    </div>
    })  
    return(
        <ListForm/>
    )

    
}
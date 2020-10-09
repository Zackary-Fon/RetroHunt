
import React, {useState} from "react";
import {ObjectProduct} from "../../Rooting/const";




const Search = ()=>{
    const [recherche, majRecherche] = useState("");
    const getValue = (e) =>{
        let recherche = e.currentTarget.value;
        majRecherche(recherche);
    };
    const [show, setShow] = useState(false);
    const showSearch = () =>{
        if (recherche !== ""){
            setShow(!show)
        }
    };
    const Searching = (txt) =>{
        if (show){
            ObjectProduct.filter(produit => produit.name === txt).map(filteredProduit => (
                <li>
                    {filteredProduit.name}
                </li>
                
            ))
        } else return null
    };


    return (
        <>
        <input type="text" placeholder="Recherchez" className="searchbar" onChange={(e)=>{getValue(e)}} />
        <Searching showSearch={show} txt={recherche}></Searching>
        </>
    )
}

export default Search;
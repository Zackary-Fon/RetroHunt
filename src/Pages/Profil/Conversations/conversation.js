import react,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
const conv=({match}) => {
    console.log('ta mere')
        const[data,setdata]=useState([])
        
        useEffect( () => {
                const user={
                    email: match.params.id
                }
        const jts=JSON.stringify(user)
        const conf={ method: "POST",
                    headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Conversations"
                    },
                    body:jts};
                    fetch("http://localhost:3006/Profil/Conversations",conf)
                    .then(response => response.json().then((json) => {
                        
                            setdata(json)
                        
            }))
        });
        console.log(data)
        const {params:id } = match;
        const Articles = data.map((produit)=>{
            return (
                <li key={produit._id} className="imageIntitule">
                    <div className="intituleAnnonce">
                        <h1>{produit.envoyeur}</h1>
                        <h1>{produit.receveur}</h1>
                    </div>   
                        <h4> {produit.Message}</h4>
                        <h4> {produit.Date}</h4>
                    
                    <Link to={`/Chat/${produit.receeveur}`}><div className="bouton">y aller</div></Link>
                    
                </li>
            )
        })
        return (
            <div className="bodyRecent" >
                <Link to="/Profil"><i class="fas fa-chevron-left"></i> Retour</Link>
                <ul className="listArticles">{Articles}</ul>
            </div>
        
        )
}

export default conv
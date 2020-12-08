
const Rec=[];

const Annonce = () => {

const[data,setdata]=useState([])
useEffect(async () => {
    fetch("http://localhost:3006/Profil/Annonce",{ method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"http://localhost:3006/Profil/Annonce"
    }})
    .then(response => {response.json().then(json => {
        const taille=(json.length -1);
        let Recent=taille-5;
        for(let i=1;i<=6;i++){
            Rec.push(json[Recent])
            Recent++;
            }
        setdata(Rec);
    })})
});
console.log(data)
const Articles = data.map((produit)=>{
    return (
        <li key={produit._id} className="imageIntitule">
            <div className="imageProduit" style={{background: `url(${produit.image[0]})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width:"100%", height:"200px"}}/>
            <div className="intituleAnnonce">
                <h1>{produit.Titre}</h1>
                <h3>console: {produit.Console}</h3>
                <p className="PersonPubli"><img src={person} style={{height:"20px", width:"20px"}}/> {produit.PseudoVendeur}</p>
                <h4>prix : {produit.Prix}</h4>
            <Link to={`/Product/${produit._id}`}><div className="bouton">Voir la fiche</div></Link>
            </div>
        </li>
    )
})
return (
    <div className="bodyRecent" >
        <ul className="listArticles">{Articles}</ul>
    </div>

)
           /*  const ann=document.querySelector('.Annonces');
        
            console.log(json.Annonces.length); 
            if (json.Annonces.length >=3){
                for(let i=0;i<3;i++){
                const li = document.createElement('li');
                const div=document.createElement('div');
                const img = document.createElement('img');
                const span2 = document.createElement('span');
                const btn=document.createElement('a');
                const btn2=document.createElement('a');
                const title=json.Annonces[i]._id;
                //console.log("\""+title+"\"");
                console.log(json.Annonces[i]._id)
                ann.appendChild(div);
                div.appendChild(img);
                
                div.appendChild(span2);
                div.appendChild(btn);
                div.appendChild(btn2)
                img.setAttribute('src',json.Annonces[i].image[0]);
                img.setAttribute('class','imgAnnonce');
                div.setAttribute('class','contain')
                span2.innerHTML =json.Annonces[i].Titre;
                btn.innerHTML="Y Acceder";
                btn2.innerHTML="Modifier";
                btn2.setAttribute('href',"/Modification/"+title);
                btn.setAttribute('href',"/Produit/"+title);
                btn2.setAttribute('class',"modif");
                btn.setAttribute('class',"acces");
             btn.setAttribute('href',) 
            }}else{
                for(let i=0;i<json.Annonces.length;i++){
                    const li = document.createElement('li');
                    const div=document.createElement('div');
                    const img = document.createElement('img');
                    const span2 = document.createElement('span');
                    const btn=document.createElement('a');
                    const btn2=document.createElement('a');
                    ann.appendChild(div);
                    div.appendChild(img);
                    const title=json.Annonces[i]._id;
                    div.appendChild(span2);
                    div.appendChild(btn);
                    div.appendChild(btn2)
                    img.setAttribute('src',json.Annonces[i].image[0]);
                    img.setAttribute('class','imgAnnonce');
                    div.setAttribute('class','contain')
                    span2.innerHTML =json.Annonces[i].Titre;
                    btn.innerHTML="Y Acceder";
                    btn2.innerHTML="Modifier";
                    btn.setAttribute('href','/Product/'+title),
                    
                    btn2.setAttribute('href','/Modification/'+title)
                    btn2.setAttribute('class',"modif");
                    btn.setAttribute('class',"acces");
                    //btn.classList.add("acces")
                        }
            } */
            /* if(json.User.PhotoProfil !==""){
                document.querySelector('#photo').innerHTML=json.User.PhotoProfil;} */

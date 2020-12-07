import react from "react"

export const AnnFilt=[];
const all=[];
const Search=()=>{
const searchBar= document.getElementById('searchBar');
searchBar.addEventListener('keyup',(e)=>{
    const search=e.target.value;
    
    
    const test=[];
    all.filter((ann)=>{
        
    console.log(AnnFilt.length);
        for(let j=AnnFilt.length+1;j>=0;j--){
            delete AnnFilt[j];
        }
        if(AnnFilt.length==0){
            AnnFilt.pop()
        }
        for(let i=0;i<ann.length;i++){
            
        test.push(ann[i].Titre.toLowerCase().includes(search) || 
            ann[i].Console.toLowerCase().includes(search)) ;
        if (test[i]==true){
            AnnFilt.push(ann[i])
        }
        
    }
});
    console.log(AnnFilt)
    
})

const URL="http://localhost:3006/all"
const config={ //config fetch
        method: 'GET', //j envoie des données
        headers: {
        "Access-Control-Allow-Origin":"http://localhost:3006/all" //j autorise l accès 
    }
}
fetch(URL,config)
.then(response=>response.json().then((response)=>{
all.push(response)
})
)
}


export default Search
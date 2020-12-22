import react from 'react'

const eye=()=>{ //affichag ou non des mdp
    const pass=document.querySelector(".toggle-password"); //recup de l oeil
    const input=document.querySelector("#Password"); //recup dee l input password
    pass.addEventListener('click',()=>{ //quand je clque sur l oeil
        if(pass.classList.contains("fa-eye-slash")){ //si mon oeil est barré
            pass.classList.remove("fa-eye-slash") //je le dé-barre
        }else{
        pass.classList.add("fa-eye-slash")} //sinon je le barre
        if (input.type == "password") { //si le type de l input est password
          input.setAttribute("type", "text"); //j lee transform en texte
        } else { //sinon en passeword
          input.setAttribute("type", "password");
        }
      
    })
}

export default eye

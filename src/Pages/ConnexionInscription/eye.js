import react from 'react'

const eye=()=>{
    const pass=document.querySelector(".toggle-password");
    const input=document.querySelector("#Password")
    pass.addEventListener('click',()=>{
        if(pass.classList.contains("fa-eye-slash")){
            pass.classList.remove("fa-eye-slash")
        }else{
        pass.classList.add("fa-eye-slash")}
        if (input.type == "password") {
          input.setAttribute("type", "text");
        } else {
          input.setAttribute("type", "password");
        }
      
    })
}

export default eye
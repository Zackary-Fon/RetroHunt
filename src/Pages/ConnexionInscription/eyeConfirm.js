import react from "react"

const eyeConfirm=()=>{ //PAREIL QUE EYE
  const pass=document.querySelector(".toggle-password-confirm");
  const input=document.querySelector("#mdp2");
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

export default eyeConfirm
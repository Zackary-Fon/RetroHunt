import react from 'react'

const apercu=()=>{
    const inp=document.getElementById('image');
    const imgp=document.querySelector('.image-preview__image');
    const block=document.querySelector('#imagePreview');

    inp.addEventListener('change',()=>{
        const file=document.getElementById('image').files[0];
        if (file){
            const reader=new FileReader();
            imgp.style.display="block";
            
            block.style.display="none";
            reader.addEventListener('load',()=>{ 
                imgp.setAttribute("src",reader.result);
            });
            reader.readAsDataURL(file);
        }
    })
}

export default apercu
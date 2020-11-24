// import React, { useState } from 'react';
// import './Header.css';
// import menu from '../Images/menu.png';
// import list from './ListMenu';

// const Burger = () =>{

//     /* déclaration du state qui sert a afficher le menu lorsque l'on clique sur le burger*/ 
//     const [open, setOpen] = useState(false);
//     /*const test = useRef();
//     console.log("test", test.current);
//     useLayoutEffect(() => {
//         console.log("test", test.current);
//       return () => {
//       },
//       []
//     })*/

//     return(
//         <>
//         <img /*ref={test}*/ src={menu} alt="menu" className="burger" onClick={()=> {setOpen(!open)}}/>
//          {/*Si open vaut true alors on affiche le menu qui est celui de la version desktop */}
//         {open? <ul className="burgerMenu">{list()}</ul>:null}
//         </>
//     )

// }
// export default Burger;
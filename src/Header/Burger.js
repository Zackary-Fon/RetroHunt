import React, {useState, useRef, useLayoutEffect} from 'react';
import './Header.css';
import menu from '../Images/menu.png';
import list from './ListMenu';
// to do: le menu a placer en 0 top et pourquoi il se place pas en 0 ?
const Burger = () =>{
    const [open, setOpen] = useState(false);
    /*const test = useRef();
    console.log("test", test.current);
    useLayoutEffect(() => {
        console.log("test", test.current);
      return () => {
      },
      []
    })*/

    return(
        <>
        <img /*ref={test}*/ src={menu} alt="menu" className="burger" onClick={()=> {setOpen(!open)}}/>
        {open? <ul className="burgerMenu">{list()}</ul>:null}
        </>
    )

}
export default Burger;
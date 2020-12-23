import React,{useEffect} from 'react';
import logo_dm from '../Images/logo_retrohunt_darkmodecolor1.png';
// import HeadMenu from './Menu';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
// import Burger from './Burger';
import {Link} from "react-router-dom";
import List from "./ListMenu";
import Search from "./Search";
import Burger from "./Burger"
import Alert from 'react-bootstrap/Alert';
import menu from "../Images/bars-solid.svg"
const Header = () => {
    useEffect(()=>{
        Search()
        Burger()
    })
    return ( 
    <header>
            <Navbar className="menu_head  mr-auto" expand="lg">
            <div class="bg"><div class="burger"><i class="fas fa-bars"></i></div>
            <div class="menuB">
            <Form inline>
            <Link to={`/Search`} ><Button variant="btn1 btn-custom"><i className="fas fa-search"></i></Button></Link>
                <FormControl type="text" id="searchBar" placeholder="Rechercher" className="mr-sm-2 searchBarB" />
            </Form>
            <Link  id="connexion2" to="/ConnexionInscription">Connexion/inscription</Link>
            <Link  id="profil2" to="/Profil">Profil</Link>
            <div id="Jeux">
                <p id="jj">Jeux</p></div>
                <ul id="ListeCate">
                <li> <Link to="/Categorie/Playstation 1">Playstation 1 </Link></li>
                <li> <Link to="/Categorie/Playstation 2">Playstation 2</Link></li>
                <li> <Link to="/Categorie/Xbox">Xbox</Link></li>
                <li> <Link to="/Categorie/Gamecube">Gamecube</Link></li>
                <li> <Link to="/Categorie/Nintendo 64">Nintendo 64</Link></li>
                <li> <Link to="/Categorie/Nes">Nes</Link></li>
                <li> <Link to="/Categorie/Gameboy">Gameboy</Link></li>
                <li> <Link to="/Categorie/Super Nes">Super Nes</Link></li>
                <li> <Link to="/Categorie/MegaDrive">MegaDrive</Link></li>
                <li> <Link to="/Categorie/NEO GEO">NEO GEO</Link></li>
                </ul>
            </div>
            </div>
                <Navbar.Brand className="logo_resize" href="/">
                    <img id="logo" src={logo_dm} alt="Logo"/>
                </Navbar.Brand>
                <Nav>
                    <List/>
                </Nav>
            <Form inline>
            <Link to={`/Search`} ><Button variant="btn btn-custom"><i className="fas fa-search"></i></Button></Link>
                <FormControl type="text" id="searchBar" placeholder="Rechercher" className="mr-sm-2" />
            </Form>
            <Nav>
                <Nav.Link id="deco" > Déconnexion</Nav.Link>
            </Nav>
            {/* <HeadMenu/>
            <Burger/> */}
            </Navbar>
            
    </header>
    )
}
export default Header;
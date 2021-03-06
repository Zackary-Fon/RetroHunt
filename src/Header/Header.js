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
                <div className="bg"><div class="burger"><i class="fas fa-bars"></i></div>
                    <div className="menuB ">
                        <Form inline className="justify-content-center align-items-center mt-3">
                            <Link to={`/Search`} ><Button variant="btn1 btn-custom"><i className="fas fa-search"></i></Button></Link>
                            <FormControl type="text" id="searchBar" placeholder="Rechercher" className="mr-sm-2 searchBarB" />
                        </Form>
                        <div className="d-flex justify-content-center mt-3">
                            <div className="w-75 ">
                                <Link className="text-white" id="connexion2" to="/ConnexionInscription">Connexion/inscription</Link>
                                <Link className="text-white" id="profil2" to="/Profil">Profil</Link>
                                <Link className="text-white" id="deco2" >Deconnexion</Link>
                                <div id="Jeux">
                                    <p id="jj">Jeux et Consoles</p>
                                </div>
                                <ul id="ListeCate" className="list_game">
                                    <li> <Link to="/Categorie/Playstation 1" className="text-white">Playstation 1 </Link></li>
                                    <li> <Link to="/Categorie/Playstation 2" className="text-white">Playstation 2</Link></li>
                                    <li> <Link to="/Categorie/Xbox" className="text-white">Xbox</Link></li>
                                    <li> <Link to="/Categorie/Gamecube" className="text-white">Gamecube</Link></li>
                                    <li> <Link to="/Categorie/Nintendo 64" className="text-white">Nintendo 64</Link></li>
                                    <li> <Link to="/Categorie/Nes" className="text-white">Nes</Link></li>
                                    <li> <Link to="/Categorie/Gameboy" className="text-white">Gameboy</Link></li>
                                    <li> <Link to="/Categorie/Super Nes" className="text-white">Super Nes</Link></li>
                                    <li> <Link to="/Categorie/MegaDrive" className="text-white">MegaDrive</Link></li>
                                    <li> <Link to="/Categorie/NEO GEO" className="text-white">NEO GEO</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar.Brand className="logo-resize text-center" href="/">
                    <img id="logo" src={logo_dm} alt="Logo"/>
                </Navbar.Brand>
                <Nav>
                    <List/>
                </Nav>
            <Form inline>
            <Link to={`/Search`} ><Button variant="btn btn-custom"><i className="fas fa-search"></i></Button></Link>
                <FormControl type="text" id="searchBar" placeholder="Rechercher" className="mr-sm-2 searchBar" />
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
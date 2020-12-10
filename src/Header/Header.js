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

import Alert from 'react-bootstrap/Alert';

const Header = () => {
    useEffect(()=>{
        Search()
    })
    return ( 
    <header>
            <Navbar className="menu_head  mr-auto" expand="lg">
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
            <Alert className="deco" variant={'danger'}>
    vosu etes 
  </Alert>
    </header>
    )
}
export default Header;
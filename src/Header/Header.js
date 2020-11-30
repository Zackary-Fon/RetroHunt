import React from 'react';
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

const Header = () => {
    return ( 
    <header>
            <Navbar className="menu_head  mr-auto" expand="lg">
                <Navbar.Brand className="logo_resize" href="/">
                    <img id="logo" src={logo_dm} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <List/>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success"><i className="fas fa-search btn-custom"></i></Button>
                        <FormControl type="text" placeholder="Rechercher" className="mr-sm-2" />
                    </Form>
                    {/* <HeadMenu/>
                    <Burger/> */}
                </Navbar.Collapse>
            </Navbar>

    </header>
    )
}
export default Header;
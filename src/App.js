import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
//import LogoFooter from './Footer/LogoFooter';
//AHAHAHAhAHAHAHAHAHAHAHAAH Genre git c'est bien mdr//
//SALUT HEADER//
import Header from "./Header/Header";
import Main from "./Rooting/Main";

const App = () => {
  return (
    <div className="App">
     <Header/>
     <Main />
     <Footer/>
    </div>
    
  );
}

export default App;

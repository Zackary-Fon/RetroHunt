import React, { useEffect } from 'react';
import './App.css';
import Footer from './Footer/Footer';
//import LogoFooter from './Footer/LogoFooter';
import Header from "./Header/Header";
import Main from "./Rooting/Main";
import Alert from 'react-bootstrap/Alert';
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

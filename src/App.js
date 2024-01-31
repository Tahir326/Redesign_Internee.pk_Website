
import './App.css';

import React from 'react';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Internship from './Components/Internship';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Internship/>
    <Footer/>
    </>
  );
}

export default App;

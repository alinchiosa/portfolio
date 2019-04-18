import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';  

class App extends Component {
  render() {
    return (
      <BrowserRouter className="appContainer">
        <Navbar/>
        <AnimatedSwitch 
          atEnter={{ opacity: 0, scale: 0.5 }}
          atLeave={{ opacity: 0, scale: 0.5 }}
          atActive={{ opacity: 1, scale: 1 }}
          className="switch-wrapper">
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects}/>
        </AnimatedSwitch>
        <Footer className="footer"/>
      </BrowserRouter>
    );
  }
}

export default App;


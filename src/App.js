import './App.css';
import React from 'react';
import Navbar from './components/navBar';
import Home from './components/home';
import Contact from './components/contact';
import Background from './components/background';
import Project from './components/projects';


function App() {
  return (
      <div className="App">
          <Navbar />
          <div id="home">
            <Home />
          </div>
          <div id="background">
            <Background />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <Contact />
          </div>
      </div>
  );
}

export default App;

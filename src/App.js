import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavbarComponent';
import Home from './components/HomeComponent';
import Skills from './components/SkillsComponent';
import Projects from './components/ProjectsComponent';
import Contact from './components/ContactComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

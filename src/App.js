import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import SkillsComponent from './components/SkillsComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ContactComponent from './components/ContactComponent';
import AboutMeComponent from './components/AboutMe';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/skills" element={<SkillsComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
        <Route path="/about-me" element={<AboutMeComponent />} />
        <Route path="/contacts" element={<ContactComponent />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;

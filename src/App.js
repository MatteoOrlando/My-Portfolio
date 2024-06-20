import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import ProjectsComponent from './components/ProjectsComponent';
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
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/projects" element={<ProjectsComponent />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;

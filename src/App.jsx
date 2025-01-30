import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

export const App =() => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Be/Kijelentkezés</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/Registration'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Regisztráció</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route to = "/" element={ <Login /> } />
        <Route to = "/Registration" element= { <Registration /> } />
        <Route to = "*" element={ <Login /> } />
        <Route />
      </Routes>
    </Router>
  );
}

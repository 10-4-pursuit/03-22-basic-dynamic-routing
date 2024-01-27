import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './Components.js/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Router>
          <Link to="/user/Edgar">Edgar's Profile</Link>
          <br />
          <Link to="/user/John">John's Profile</Link>
          <br />
          <Link to="/user/Mary">Mary's Profile</Link>
          <br />
          <Link to="/user/Peter">Peter's Profile</Link>
          <br />
          <Routes>
            <Route path="/user/:username" element={<UserProfile />} />
          </Routes>
        </Router>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

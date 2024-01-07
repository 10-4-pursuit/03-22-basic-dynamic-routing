import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css';
import UserProfile from './UserProfiles/users';

function App() {
  return (
    <Router>
      <ul>
      <li><Link to='/user/mick'>all about mick</Link></li>
      <li><Link to='/user/alice'>all about alice</Link></li>
      <li><Link to='/user/steve'>all about steve</Link> </li>
       
      </ul>

      <Routes>
        <Route path='/user/:username' element={<UserProfile />} />


      </Routes>
    </Router>
  );
}


export default App;

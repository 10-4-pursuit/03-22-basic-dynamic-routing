import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile.js';
import './App.css';

function App() {
  return (
    <Router>
<div className="App">
  <nav>
    <ul>
      <li>
        <Link to="/user/Mick">User Mick</Link>
      </li>
      <li>
        <Link to="/user/Alice">User Alice</Link>
      </li>
      <li>
        <Link to="/user/Steve">User Steve</Link>
      </li>
    </ul>
  </nav>
     <Routes>

     <Route path="/user/:username" element={<UserProfile />} />
     </Routes>
    </div>

    </Router>
  );
}

export default App;

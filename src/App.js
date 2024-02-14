import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import UserProfile from './UserProfile/index.js';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to='/user/Sammy'>Sammy's Profile</Link>
      <Link to='/user/Kyron'>Kyron's Profile</Link>
      <Link to='/user/Milly'>Milly's Profile</Link>
      <Link to='/user/Becky'>Becky's Profile</Link>
      <Routes>
        <Route path='/user/:username' element={<UserProfile />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

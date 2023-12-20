
import { BrowserRouter as Router, Route , Link, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Link className='active' to="/user/Anna">User Profile: Anna</Link>
        <Link className='active' to="/user/John">User Profile: John</Link>
        <Link className='active' to="/user/Peter">User Profile: Peter</Link>
        <Link className='active' to="/user/Steve">User Profile: Steve</Link>
        <Link className='active'  to="/user/Mike">User Profile: Mike</Link>
      </nav>

      <Routes>
        <Route path="/user/:username" element={<UserProfile />} />
      </Routes>
  
    </div>
    </Router>
  );
}

export default App;

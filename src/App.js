import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';


function App() {

  return (
    <Router> 
        <header>
        {/* Add the links here for navigation bar */}
        <div>
          <Link to="/user/Rand Al'Thor">Rand's Profile</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/user/Egwene al'Vere">Egwene's Profile</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/user/Perrin Aybara">Perrin's Profile</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </header>
    <div className="App">
  
       
        <Routes>
        <Route path="/user/:username" element={<UserProfile />} />
        </Routes>
    
    
      
    </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        <Link to='/'>Home</Link>
          <Link to='/user/Mike'>Mike's Profile</Link>
          <Link to='/user/Sam'>Sam's Profile</Link>
          <Link to='/user/Jennifer'>Jennifer's Profile</Link> 
        </nav>

        <Routes>
          <Route path='/' />
          <Route path='/user/:username' element={<UserProfile />} />
        </Routes>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Router>
  );
}

export default App;

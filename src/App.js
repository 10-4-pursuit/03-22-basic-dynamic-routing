import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="App-logo" />
        <h1>Welcome to User Profiles</h1>
      </header>
      <main className="App-body">
        <Router>
          <nav>
            <Link to="/user/mick">Mick's Profile
            <img />
            </Link>
            <br />
            <Link to="/user/alice">Alice's Profile
            <img />
            </Link>
            <br />
            <Link to="/user/steve">Steve's Profile
            <img />
            </Link>
          </nav>

          <Routes>
            <Route path="/user/:username" element={<UserProfile />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

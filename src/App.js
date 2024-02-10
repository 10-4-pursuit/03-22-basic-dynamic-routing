import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useParams } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/user/Jayla'>Jayla</Link><br />
          <Link to='/user/Peyton'>Peyton</Link><br />
          <Link to='/user/Mekhi'>Mekhi</Link><br />
          <Link to='/user/Eliott'>Eliott</Link>
        </nav>
        <Routes>
          <Route path='/user/:username' element={<UserProfile />} />
        </Routes>  
      </div>
    </Router>
  );
}

function UserProfile() {
  let { username } = useParams();
  return (
    <>
      <h1>Hi, {username}!</h1>
    </>  
  );
}

export default App;

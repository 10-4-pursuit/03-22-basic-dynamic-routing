import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, useParams  } from 'react-router-dom';
import './App.css';
import UserProfile from './UserProfile';


// function UserProfile() {
//   let { username } = useParams();
//   return <h1> Hello, {username} </h1>
// }

function App() {
  return (
    <Router>
      <ul className='nav'>
      <Link to="/">Home</Link>
      <Link to="/user/Eli">Eli</Link>
      <Link to="/user/Mick">Mick</Link>
      <Link to="/user/Alice">Alice</Link>
      <Link to="/user/Steve">Steve</Link>
      </ul>
      
      
      
      <Routes>
        <Route path="/user/:username" element={<UserProfile/>}/>
      </Routes>
    </Router>
  );
}


export default App;

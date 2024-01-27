import './App.css';
import UserProfile from './components.js/UserProfile';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


      

function App() {
  return (
    <Router>
      <Link to='/user/sam'>Sam's Profile</Link>
      <br />
      <Link to='/user/Mick'>Mick's Profile</Link>
      <br />
      <Link to='/user/Alice'>Alice's Profile</Link>
      <br />
      <Link to='/user/Steve'>Steve's Profile</Link>
      <Routes>
        <Route path='/user/:username' element={<UserProfile />} />
      </Routes>
    </Router>
  );
}




export default App;

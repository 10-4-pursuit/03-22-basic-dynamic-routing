import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'

const UserProfile = () => {
  const {username} = useParams()
  return (
    <>
    <h2>Hello, {username}!</h2>
    <nav>
        <ul>
          <Link to='/user/mick'>
          <li>Mick</li>
          </Link>
          <Link to='/user/alice'>
          <li>Alice</li>
          </Link>
          <Link to='/user/steve'>
          <li>Steve</li>
          </Link>
        </ul>
      </nav>
    </>
  )
} 

const Home = () => {
  return (
    <nav>
        <ul>
          <Link to='/user/mick'>
          <li>Mick</li>
          </Link>
          <Link to='/user/alice'>
          <li>Alice</li>
          </Link>
          <Link to='/user/steve'>
          <li>Steve</li>
          </Link>
        </ul>
      </nav>
  )
}

const App = () => {
  return (
    <Router>
      <>
      <Routes>
      <Route path='/user/:username' element={<UserProfile/>}></Route>
      <Route path='/' element={<Home />}></Route>
      </Routes>
      </>
    </Router>
  )
}
export default App;

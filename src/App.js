import React from 'react'
import './styleSheet/App.css';
// import Navbar from './components/Navbar'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Register from './components/Register';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
import CardDetail from './components/CardDetail';

function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/card-details' element={<CardDetail />}/>
      {/* <Route path='/register' element={<Register />}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;

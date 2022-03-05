import React, { useState } from 'react'
import './styleSheet/App.css';
// import Navbar from './components/Navbar'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App"> 
      {/* {loggedIn ? <Navbar /> : null}
      <Login /> */}
      <Dashboard />
    </div>
  );
}

export default App;

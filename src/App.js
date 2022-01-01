import React, { useState } from 'react'
import './styleSheet/App.css';
import Navbar from './components/Navbar'
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="App"> 
      {loggedIn ? <Navbar /> : null}
      <Login />
    </div>
  );
}

export default App;

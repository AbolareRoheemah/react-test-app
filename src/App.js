import React from 'react'
import './styleSheet/App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router';
import Register from './components/Register';
import CardDetail from './components/CardDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard />}/>
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

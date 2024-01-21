import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Form from './pages/Form'
import Auth1 from './pages/Auth1';
import Auth2 from './pages/Auth2';
import Auth3 from './pages/Auth3';
import Auth4 from './pages/Auth4';
const App = () => {
  return (
    <Router>
      <Navbar sticky="top" />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Form/>}/>
        <Route path='/app' element={<Auth1/>}/>
        <Route path='/focus' element={<Auth2/>}/>
        <Route path='/pain' element={<Auth3/>}/>
        <Route path='/goals' element={<Auth4/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
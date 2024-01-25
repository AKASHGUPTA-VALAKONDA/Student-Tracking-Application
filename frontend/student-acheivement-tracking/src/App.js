import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import About from './components/about';
import './App.css';

// import Headers from "./components/Headers";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;

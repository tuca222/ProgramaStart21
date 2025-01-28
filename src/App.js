// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';
import Payment from './components/Payment';
import Thanks from './components/Thanks';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pagamento" element={<Payment/>}/>
        <Route path="/agradecimento" element={<Thanks/>} />
      </Routes>
    </Router>
    // <div className="App bg-white">
    //   <LandingPage />
    // </div>
  );
}

export default App;

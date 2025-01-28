// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from './components/LandingPage';
// import Payment from './components/Payment';
// import Thanks from './components/Thanks';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/pagamento" element={<Payment/>}/>
//         <Route path="/agradecimento" element={<Thanks/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
// import Payment from './components/Payment';
// import Thanks from './components/Thanks';
// import './App.css';

// const ScrollToSection = ({ sectionId }) => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash === sectionId) {
//       const element = document.getElementById(sectionId.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location, sectionId]);

//   return null;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/pagamento" element={<Payment />} />
//         <Route path="/agradecimento" element={<Thanks />} />
//         <Route path="/GarantaSuaVaga" element={<Navigate to="/#ComoIraFuncionar" />} />
//         <Route path="/QueroParticiparAgora" element={<Navigate to="/#ComoIraFuncionar" />} />
//       </Routes>
//       <ScrollToSection sectionId="#ComoIraFuncionar" />
//     </Router>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Payment from './components/Payment';
import Thanks from './components/Thanks';
import './App.css';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionMappings = {
      '/GarantaSuaVaga': 'ComoIraFuncionar', // Mapeia rota para o ID da seção
      '/QueroParticiparAgora': 'ComoIraFuncionar',
      '/ParticipeDoStart21': 'Participe',
      '/FacaParteDoStart21': 'Participe',
    };

    const sectionId = sectionMappings[location.pathname];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/agradecimento" element={<Thanks />} />
        <Route path="/GarantaSuaVaga" element={<LandingPage />} />
        <Route path="/QueroParticiparAgora" element={<LandingPage />} />
        <Route path="/ParticipeDoStart21" element={<LandingPage />} />
        <Route path="/FacaParteDoStart21" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

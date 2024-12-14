import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './Components/pages/FirstPage';
import HpPage from './Components/pages/hppage';
import HpBuynow from './Components/pages/HpBuynow';
import PurchasePage from './Components/pages/purchase';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/hppage" element={<HpPage/>}></Route>
        <Route path="/hpbuynow" element={<HpBuynow/>}></Route>
        <Route path="/purchase" element={<PurchasePage/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
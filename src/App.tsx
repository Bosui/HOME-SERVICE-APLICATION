// src/App.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ServiceCard from './components/ServiceCard/ServiceCard';
import Topbar from './components/Topbar/Topbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';

const App: React.FC = () => {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden' }}> {/* Užtikrina, kad viskas tilptų ekrane */}
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/services/:category" element={<ServiceCard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

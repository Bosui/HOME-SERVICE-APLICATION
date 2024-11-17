// src/routes/AppRoutes.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import Services from '../pages/Services/Services';
import SignUp from '../pages/SignUp/SignUp';

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="*" element={<NotFound />} /> {/* 404 Puslapis */}
  </Routes>
);

export default AppRoutes;

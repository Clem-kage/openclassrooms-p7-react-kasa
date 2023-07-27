import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../components/pages/HomePage'
import About from '../components/pages/AboutPage'
import Logement from '../components/pages/AccomPage'
import ErrorPage from '../components/pages/ErrorPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<ErrorPage />} />  
    </Routes>
  );
};

export default AppRoutes;

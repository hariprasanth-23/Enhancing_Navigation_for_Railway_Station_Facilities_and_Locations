import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage';
import StationsPage from './pages/StationsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';
import GuidelinesPage from './pages/GuidelinesPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navigate" element={<NavigationPage />} />
        <Route path="/stations" element={<StationsPage />} />
        <Route path="/facilities/:stationId" element={<FacilitiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/guidelines" element={<GuidelinesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
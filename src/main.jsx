import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Apropos from './pages/Apropos';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/a-propos" element={<Apropos />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
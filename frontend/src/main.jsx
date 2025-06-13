import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importing components from their respective folders
import HomePage from './HOME/HomePage.jsx';
import SignIn from './SignIn/SignIn.jsx';
import AboutPage from './About/AboutPage.jsx';
import { ProductPage } from './Products/ProductPage.jsx';
import PricingPage from './Pricing/PricingPage.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import SupportPage from './Support/SupportPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
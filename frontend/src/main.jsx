import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importing components from their respective folders
import HomePage from './HOME/HomePage';
import SignIn from './SignIn/SignIn.jsx';
import About from './about/AboutPage';  // Changed from LandingPage/About to about/AboutPage
import { ProductPage } from './landing_page/products/ProductsPage.js';  // Assuming this is where Product.js is
import PricingPage from './Pricing/PricingPage.jsx';  // Assuming this is where Support.js is
import NavBar from './NavBar.jsx';                  // Changed from NavBar to Navbar.js
import Footer from './Footer';
import { SupportPage } from './landing_page/support/SupportPage.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
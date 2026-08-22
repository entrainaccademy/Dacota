import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages Import
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Industries from './pages/Industries';
import TurnkeySolutions from './pages/TurnkeySolutions';
import Manufacturing from './pages/Manufacturing';
import Quality from './pages/Quality';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';

// ScrollToTop Helper Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-[#2A2D33] font-sans flex flex-col justify-between selection:bg-[#D32F2F] selection:text-white">
        
        {/* Sticky Header */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/turnkey-solutions" element={<TurnkeySolutions />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Charcoal Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;

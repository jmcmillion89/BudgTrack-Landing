import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu when the button is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when the user scrolls
  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu when scrolling
    }
  };

  // Add event listener for scroll on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); // Dependency array includes `isOpen`

  return (
    <Router>
      
      <div>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">BudgTrack</h1>

            {/* Hamburger Menu for mobile */}
            <div className="md:hidden relative">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <ul className="py-1">
                    <li><Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/features" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={toggleMenu}>Features</Link></li>
                    <li><Link to="/pricing" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={toggleMenu}>Pricing</Link></li>
                    <li><Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={toggleMenu}>Contact</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Links (hidden on mobile) */}
            <ul className="hidden md:flex space-x-6">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/features" className="hover:underline">Features</Link></li>
              <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* Route configuration */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
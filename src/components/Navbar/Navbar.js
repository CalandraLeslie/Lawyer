// Navigation component with scroll effects and mobile menu functionality
// Provides smooth scrolling navigation between page sections
import React, { useState, useEffect } from 'react';
import './Navbar.css';

/**
 * Navbar Component - Responsive navigation bar with scroll effects
 * 
 * Features:
 * - Changes appearance when user scrolls past 50px
 * - Mobile hamburger menu for responsive design
 * - Smooth scrolling to page sections
 * - Highlights current section based on scroll position
 * 
 * @returns {JSX.Element} Navigation bar with menu items and logo
 */
const Navbar = () => {
  // State to track if page has been scrolled (for styling changes)
  const [scrolled, setScrolled] = useState(false);
  
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to handle scroll events and update navbar appearance
  useEffect(() => {
    /**
     * Handles scroll events to change navbar styling
     * Adds 'scrolled' class when user scrolls past 50px
     */
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Toggles the mobile menu open/closed state
   */
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  /**
   * Handles smooth scrolling to specific page sections
   * Also closes mobile menu after navigation
   * 
   * @param {string} id - The ID of the target element to scroll to
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo/Brand section */}
        <div className="navbar-logo">
          <h1>John Smith <span>Law</span></h1>
        </div>
        
        {/* Mobile hamburger menu icon */}
        <div className="mobile-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Navigation menu items */}
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a onClick={() => scrollToSection('home')}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('services')}>Services</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
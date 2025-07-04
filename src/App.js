// Main App component for John Smith Law Firm website
// This component serves as the root component that renders all page sections
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import './styles/global.css';

/**
 * App Component - Main application component
 * 
 * This is the root component that renders the complete law firm website.
 * It includes all the main sections: Navigation, Hero, About, Services, and Contact.
 * The layout follows a single-page application structure with smooth scrolling navigation.
 * 
 * @returns {JSX.Element} The complete website layout
 */
function App() {
  return (
    <div className="App">
      {/* Fixed navigation bar with smooth scrolling functionality */}
      <Navbar />
      
      {/* Hero section with main banner and call-to-action buttons */}
      <Hero />
      
      {/* About section with lawyer information and credentials */}
      <About />
      
      {/* Services section displaying legal practice areas */}
      <Services />
      
      {/* Contact section with form and office information */}
      <Contact />
    </div>
  );
}

export default App;
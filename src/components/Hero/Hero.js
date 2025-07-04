// Hero section component with intersection observer animations
// Main banner area with call-to-action buttons and background effects
import React, { useEffect, useRef } from 'react';
import './Hero.css';

/**
 * Hero Component - Main landing section with animated content
 * 
 * Features:
 * - Intersection Observer for scroll-triggered animations
 * - Call-to-action buttons with smooth scrolling
 * - Background overlay and decorative shapes
 * - Responsive design with mobile optimization
 * 
 * @returns {JSX.Element} Hero section with animated content and CTAs
 */
const Hero = () => {
  // Ref to target the hero container for animation
  const heroRef = useRef(null);
  
  // Effect to set up intersection observer for scroll animations
  useEffect(() => {
    /**
     * Intersection Observer to trigger animations when hero comes into view
     * Uses a threshold of 0.1 (10% visibility) to trigger animation
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when element enters viewport
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );
    
    // Start observing the hero element if it exists
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    // Cleanup function to stop observing when component unmounts
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  /**
   * Handles smooth scrolling to specific page sections
   * Used by call-to-action buttons to navigate to other sections
   * 
   * @param {string} id - The ID of the target element to scroll to
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="hero">
      {/* Dark overlay for better text readability over background */}
      <div className="hero-overlay"></div>
      
      {/* Main hero content container with animation ref */}
      <div className="container hero-container" ref={heroRef}>
        <div className="hero-content">
          {/* Main heading with firm name */}
          <h1>John Smith <span>Law Firm</span></h1>
          
          {/* Subheading describing services */}
          <h2>Modern Solutions for Complex Legal Matters</h2>
          
          {/* Brief description of firm's approach */}
          <p>Dedicated to providing exceptional legal services with a progressive approach</p>
          
          {/* Call-to-action buttons */}
          <div className="hero-buttons">
            {/* Primary CTA - Free consultation */}
            <a onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Free Consultation
            </a>
            {/* Secondary CTA - View services */}
            <a onClick={() => scrollToSection('services')} className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
        
        {/* Decorative background shapes for visual appeal */}
        <div className="hero-shape"></div>
        <div className="hero-shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
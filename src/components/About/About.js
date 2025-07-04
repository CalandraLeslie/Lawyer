// About section component showcasing lawyer credentials and firm values
// Features intersection observer animations for text and image elements
import React, { useEffect, useRef } from 'react';
import './About.css';

/**
 * About Component - Displays lawyer information, values, and statistics
 * 
 * Features:
 * - Intersection Observer animations for staggered content reveal
 * - Firm values with icons and descriptions
 * - Statistics showcase (experience, cases won, satisfaction rate)
 * - Professional headshot with image animations
 * - Responsive two-column layout
 * 
 * @returns {JSX.Element} About section with lawyer info and credentials
 */
const About = () => {
  // Refs for targeting different elements for animation
  const aboutRef = useRef(null);  // For text content animation
  const imageRef = useRef(null);  // For image animation
  
  // Effect to set up intersection observers for scroll animations
  useEffect(() => {
    /**
     * Generic function to create intersection observers for elements
     * Allows different animation classes for different elements
     * 
     * @param {HTMLElement} element - DOM element to observe
     * @param {string} className - CSS class to add when element enters viewport
     * @returns {Function} Cleanup function to unobserve element
     */
    const observeElement = (element, className) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add specified animation class when element becomes visible
            entry.target.classList.add(className);
          }
        },
        { threshold: 0.2 } // Trigger when 20% of element is visible
      );
      
      if (element) {
        observer.observe(element);
      }
      
      // Return cleanup function
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    };
    
    // Set up observers for both text and image with different animation classes
    observeElement(aboutRef.current, 'animate-text');
    observeElement(imageRef.current, 'animate-image');
  }, []);
  
  return (
    <section id="about" className="about">
      {/* Decorative background shape */}
      <div className="about-shape"></div>
      
      <div className="container about-container">
        {/* Text content section with animation ref */}
        <div className="about-content" ref={aboutRef}>
          {/* Section heading */}
          <h2>About <span>John Smith</span></h2>
          
          {/* Brief introduction paragraph */}
          <p>With over 20 years of experience, John Smith has established himself as a respected legal professional dedicated to progressive and contemporary approaches to law.</p>
          
          {/* Firm values section with icons and descriptions */}
          <div className="about-values">
            {/* Value 1: Integrity */}
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Integrity</h3>
              <p>We adhere to the highest ethical standards in all our dealings.</p>
            </div>
            
            {/* Value 2: Client-Focused */}
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Client-Focused</h3>
              <p>Your needs and objectives are our priority throughout the legal process.</p>
            </div>
            
            {/* Value 3: Innovation */}
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We employ creative strategies and modern solutions to complex legal challenges.</p>
            </div>
          </div>
          
          {/* Statistics section showcasing firm achievements */}
          <div className="about-stats">
            {/* Years of experience */}
            <div className="stat">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            {/* Cases won */}
            <div className="stat">
              <h3>500+</h3>
              <p>Cases Won</p>
            </div>
            {/* Client satisfaction rate */}
            <div className="stat">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        
        {/* Professional headshot section with animation ref */}
        <div className="about-image" ref={imageRef}>
          <div className="image-container">
            {/* Professional photo from Unsplash */}
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="John Smith Attorney" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const observeElement = (element, className) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        },
        { threshold: 0.2 }
      );
      
      if (element) {
        observer.observe(element);
      }
      
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    };
    
    observeElement(aboutRef.current, 'animate-text');
    observeElement(imageRef.current, 'animate-image');
  }, []);
  
  return (
    <section id="about" className="about">
      <div className="about-shape"></div>
      <div className="container about-container">
        <div className="about-content" ref={aboutRef}>
          <h2>About <span>John Smith</span></h2>
          <p>With over 20 years of experience, John Smith has established himself as a respected legal professional dedicated to progressive and contemporary approaches to law.</p>
          
          <div className="about-values">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Integrity</h3>
              <p>We adhere to the highest ethical standards in all our dealings.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Client-Focused</h3>
              <p>Your needs and objectives are our priority throughout the legal process.</p>
            </div>
            
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We employ creative strategies and modern solutions to complex legal challenges.</p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Cases Won</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="about-image" ref={imageRef}>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="John Smith Attorney" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
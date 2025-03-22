import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container" ref={heroRef}>
        <div className="hero-content">
          <h1>John Smith <span>Law Firm</span></h1>
          <h2>Modern Solutions for Complex Legal Matters</h2>
          <p>Dedicated to providing exceptional legal services with a progressive approach</p>
          <div className="hero-buttons">
            <a onClick={() => scrollToSection('contact')} className="btn btn-primary">
              Free Consultation
            </a>
            <a onClick={() => scrollToSection('services')} className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
        <div className="hero-shape"></div>
        <div className="hero-shape-2"></div>
      </div>
    </section>
  );
};

export default Hero;
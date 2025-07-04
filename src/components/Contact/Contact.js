// Contact section component with form handling and office information
// Features form validation, submission handling, and contact details display
import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

/**
 * Contact Component - Contact form and office information section
 * 
 * Features:
 * - Contact form with validation and submission handling
 * - Office location, phone, and email information
 * - Social media links
 * - Intersection Observer animations
 * - Form state management with success/error messages
 * - Responsive two-column layout
 * 
 * @returns {JSX.Element} Contact section with form and office details
 */
const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  // State to manage form submission status and messages
  const [formStatus, setFormStatus] = useState({
    submitted: false,  // Whether form has been submitted
    error: false,      // Whether there was an error
    message: ''        // Status message to display
  });
  
  // Ref for targeting contact section for animations
  const contactRef = useRef(null);
  
  /**
   * Handles form input changes and updates state
   * Uses computed property names to update the correct field
   * 
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  /**
   * Handles form submission with validation
   * Validates required fields and email format
   * Simulates form submission with success message
   * 
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields (name, email, message)
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Simulate form submission (in real app, this would send data to server)
    // Using setTimeout to simulate async operation
    setTimeout(() => {
      // Set success status and message
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message! We will contact you shortly.'
      });
      
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Auto-hide status message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1000); // 1 second delay to simulate processing
  };
  
  // Effect to set up intersection observer for scroll animations
  useEffect(() => {
    /**
     * Intersection Observer to trigger animations when contact section enters viewport
     * Uses threshold of 0.1 (10% visibility) to trigger animation
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation class when section becomes visible
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );
    
    // Start observing the contact section if it exists
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    // Cleanup function to stop observing when component unmounts
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  
  return (
    <section id="contact" className="contact">
      {/* Decorative background shape */}
      <div className="contact-shape"></div>
      
      {/* Main contact container with animation ref */}
      <div className="container contact-container" ref={contactRef}>
        {/* Contact information section */}
        <div className="contact-info">
          {/* Section heading */}
          <h2>Get in <span>Touch</span></h2>
          <p>Ready to discuss your legal needs? Contact us for a free consultation.</p>
          
          {/* Contact details with icons */}
          <div className="info-items">
            {/* Office address */}
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>Our Office</h3>
                <p>123 Legal Avenue, Suite 500<br />New York, NY 10001</p>
              </div>
            </div>
            
            {/* Phone number and hours */}
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p>(212) 555-1234<br />Mon-Fri 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            {/* Email addresses */}
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p>info@johnsmithlaw.com<br />support@johnsmithlaw.com</p>
              </div>
            </div>
          </div>
          
          {/* Social media links */}
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        
        {/* Contact form section */}
        <div className="contact-form">
          <div className="form-container">
            <h3>Free Consultation</h3>
            
            {/* Form status message (success or error) */}
            {formStatus.submitted && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
            
            {/* Contact form */}
            <form onSubmit={handleSubmit}>
              {/* Name input (required) */}
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/* Email input (required) */}
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email *" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/* Phone input (optional) */}
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              {/* Service selection dropdown */}
              <div className="form-group">
                <select 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Intellectual Property">Intellectual Property</option>
                  <option value="Employment Law">Employment Law</option>
                  <option value="Real Estate Law">Real Estate Law</option>
                  <option value="Dispute Resolution">Dispute Resolution</option>
                  <option value="Family Law">Family Law</option>
                </select>
              </div>
              
              {/* Message textarea (required) */}
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message *" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {/* Submit button */}
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
// Services section component displaying legal practice areas
// Simple static component showcasing different types of legal services offered
import React from 'react';
import './Services.css';

/**
 * Services Component - Displays legal practice areas and specializations
 * 
 * Features:
 * - Grid layout of service offerings
 * - Brief descriptions of each practice area
 * - Responsive design for different screen sizes
 * - Clean, professional presentation of services
 * 
 * @returns {JSX.Element} Services section with practice area listings
 */
const Services = () => {
    return (
        <section id="services" className="services">
            {/* Section heading */}
            <h2>Our Legal Services</h2>
            
            {/* Services grid container */}
            <div className="service-list">
                {/* Family Law service */}
                <div className="service-item">
                    <h3>Family Law</h3>
                    <p>Expert legal assistance in family matters including divorce, custody, and adoption.</p>
                </div>
                
                {/* Criminal Defense service */}
                <div className="service-item">
                    <h3>Criminal Defense</h3>
                    <p>Defending your rights with a strong legal strategy in criminal cases.</p>
                </div>
                
                {/* Personal Injury service */}
                <div className="service-item">
                    <h3>Personal Injury</h3>
                    <p>Helping you seek justice and compensation for personal injury claims.</p>
                </div>
                
                {/* Business Law service */}
                <div className="service-item">
                    <h3>Business Law</h3>
                    <p>Providing legal guidance for businesses, contracts, and compliance.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
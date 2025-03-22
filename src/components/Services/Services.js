import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services">
            <h2>Our Legal Services</h2>
            <div className="service-list">
                <div className="service-item">
                    <h3>Family Law</h3>
                    <p>Expert legal assistance in family matters including divorce, custody, and adoption.</p>
                </div>
                <div className="service-item">
                    <h3>Criminal Defense</h3>
                    <p>Defending your rights with a strong legal strategy in criminal cases.</p>
                </div>
                <div className="service-item">
                    <h3>Personal Injury</h3>
                    <p>Helping you seek justice and compensation for personal injury claims.</p>
                </div>
                <div className="service-item">
                    <h3>Business Law</h3>
                    <p>Providing legal guidance for businesses, contracts, and compliance.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
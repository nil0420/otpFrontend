import React from 'react';
import "../../App.css";

const Fourthseg = () => {
    return (
        <div className="talrn-fourth-segment-container">
            <div className="talrn-service-card">
                <div className="talrn-service-text-section">
                    <h1 className="talrn-service-main-heading">Experience Talrn's managed services.</h1>
                    <p className="talrn-service-sub-heading">
                        Full-scale resource augmentation with a dedicated success manager to manage your team's performance. Book a free call with our team.
                    </p>
                </div>
                <div className="talrn-service-plans-section">
                    <div className="talrn-plan-box">
                        <h3 className="talrn-plan-heading">Premium Plan</h3>
                        <p className="talrn-plan-price">$160<span className="talrn-plan-mo">/mo</span></p>
                        <button className="talrn-plan-button">Know More</button>
                    </div>
                    <div className="talrn-plan-box">
                        <h3 className="talrn-plan-heading">Standard Plan</h3>
                        <p className="talrn-plan-price">$0<span className="talrn-plan-mo">/mo</span></p>
                        <button className="talrn-plan-button">Know More</button>
                    </div>
                    <div className="talrn-plan-box">
                        <h3 className="talrn-plan-heading">Customized Plan</h3>
                        <p className="talrn-plan-contact">Get in touch with our team</p>
                        <button className="talrn-plan-button">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="talrn-news-section">
                <h2 className="talrn-news-heading"><span style={{ color: '#5271FF' }}>Talrn</span> in the news</h2>
                <p className="talrn-news-text">
                    We are recognized as one of the leading platforms for <br /> on-demand talent.
                </p>
            </div>
        </div>
    );
};

export default Fourthseg;
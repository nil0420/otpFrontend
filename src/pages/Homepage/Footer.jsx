import React from 'react';
import "../../App.css";

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="talrn-new-footer-container">
            <div className="talrn-new-footer-top-section-wrapper">
                <div className="talrn-new-footer-column">
                    <h4 className="talrn-new-footer-column-heading">Information</h4>
                    <a href="#" className="talrn-new-footer-link">About Us</a>
                    <a href="#" className="talrn-new-footer-link">Our Story</a>
                    <a href="#" className="talrn-new-footer-link">Press</a>
                    <a href="#" className="talrn-new-footer-link">Careers</a>
                    <a href="#" className="talrn-new-footer-link">Blog</a>
                    <a href="#" className="talrn-new-footer-link">Contact Us</a>
                </div>

                <div className="talrn-new-footer-column">
                    <h4 className="talrn-new-footer-column-heading">Talrn</h4>
                    <a href="#" className="talrn-new-footer-link">View IOS Profiles</a>
                    <a href="#" className="talrn-new-footer-link">Discover</a>
                </div>

                <div className="talrn-new-footer-column">
                    <h4 className="talrn-new-footer-column-heading">Vendor</h4>
                    <a href="#" className="talrn-new-footer-link">Apply As Vendor</a>
                    <a href="#" className="talrn-new-footer-link">Vendor Login</a>
                    <a href="#" className="talrn-new-footer-link">Get Verified</a>
                    <a href="#" className="talrn-new-footer-link">Remote Jobs</a>
                    <a href="#" className="talrn-new-footer-link">Resources</a>
                </div>

                <div className="talrn-new-footer-column">
                    <h4 className="talrn-new-footer-column-heading">Social</h4>
                    <div className="talrn-new-footer-social-icons">
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="talrn-new-footer-divider"></div>

            <div className="talrn-new-footer-bottom-section">
                <div className="talrn-new-footer-copyright">
                    © 2022 - 2025 <span className="bold-text">Talrn</span> - Labor Omnia Vincit ✨ by <span className="bold-text">CG Advantage</span>
                </div>
                <div className="talrn-new-footer-legal-links">
                    <a href="#" className="talrn-new-footer-link">Terms of Use</a>
                    <a href="#" className="talrn-new-footer-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
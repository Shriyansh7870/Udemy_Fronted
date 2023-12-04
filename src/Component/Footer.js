import React from "react";
import "../CssComponent/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Udemy </h2>
            <p className="footertext">
              To learn more about TreatWoo, I recommend visiting the website
              directly or searching for recent Product, Clothes, or user
            </p>
          </div>
          <div className="footer-section">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Support</li>
            <p>FAQ</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="footer-section">
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investor</li>
          </div>
          <div className="footer-section">
            <li>Privacy policy</li>
            <li>Cookie setting</li>
            <li>Sitemap</li>
            <li>Accessibility</li>
          </div>
          <div className="footer-section">
            <button className="English">ENGLISH</button>
          </div>
        </div>
        <h2 className="companyName2">&copy; 2023 Udemy,INC </h2>
      </footer>
    </div>
  );
};

export default Footer;

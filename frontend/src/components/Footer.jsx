import React from "react";
import { Link } from "react-router-dom";
// import "./footer.css"; // Import CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-buttons">
          <Link to ="/Login"><button className="btn login">Log in</button></Link>
          <Link to ="/register"> <button className="btn signup">Sign up free</button></Link>
        </div>

        <ul className="footer-links">
          <p>About CNNCT</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Social Good</p>
          <p>Contact</p>
          <p>Careers</p>
          <p>Getting Started</p>
          <p>Features and How-Tos</p>
          <p>FAQs</p>
          <p>Report a Violation</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookie Notice</p>
          <p>Trust Center</p>
        </ul>
    </div>
    <div className="footer-text">
        <p >
          We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present, and emerging.
        </p>

        <div className="social-icons">
          <img src="/images/twitter.png" alt="Twitter" />
          <img src="/images/insta.png" alt="Instagram" />
          <img src="/images/yt.png" alt="YouTube" />
          <img src="/images/tk.png" alt="TikTok" />
          <img src="/images/cnnct.png" alt="Other" />
        </div>
    </div>
    </footer>
  );
};

export default Footer;

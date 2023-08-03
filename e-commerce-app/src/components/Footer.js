import React from 'react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>MegaTrove</h3>
        <p>MegaTrove is your ultimate destination for online</p> 
        <p> shopping, where you can discover a world of </p>
        <p> trendy and unique products that perfectly </p>
        <p>align with your personal style and preferences.</p> 
        <p>From fashion-forward clothing and accessories to</p> 
          <p>innovative gadgets and home decor, MegaTrove curates</p>
         <p> a diverse collection to cater to every taste and vibe.</p>
        <p>Follow us</p>

        {/* <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div> */}


      </div>
      <div className="footer-column">
        <h3>Main Menu</h3>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Newsletter</h3>
        <p>Stay updated with our latest products and offers!</p>
        <div className="newsletter-form">
          <input type="text" placeholder="Enter your email" />
          <button>Sign Up</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


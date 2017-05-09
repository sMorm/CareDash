// Dependenices
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles/Footer.css';

// Media
import Facebook from './media/facebook.jpg';
import Twitter from './media/twitter.jpg';
import Instagram from './media/instagram.jpg'
const Footer = () => {
  return(
    <div className="FooterBackground">
      <div className="FooterContainer">
        <span className="RouteLinks">
          <h3>CareDash</h3>
          <hr/>
          <div className="LinkContainer">
            <Link to="/CareDash" className="FooterLink">Home</Link>
            <Link to="/articles" className="FooterLink">Articles</Link>
            <Link to="/review-your-doctor" className="FooterLink">Write a Review</Link>
          </div>
        </span>
        <span className="SpecialistsLinks">
          <h3>Specialists</h3>
          <hr/>
          <ul>
            <li>Physicians</li>
            <li>Pediatricians</li>
            <li>Optometrist</li>
            <li>Dentists</li>
          </ul>
        </span>
        <span className="SocialLinks">
          <h3>Follow Us</h3>
          <hr/>
          <a 
          href="https://www.facebook.com/caredash"
          target="_blank">
            <img src={Facebook} alt="Facebook logo"/>
          </a>
          <a 
          href="https://twitter.com/caredash"
          target="_blank">
            <img src={Twitter} alt="Twitter logo"/>
          </a>
          <a 
          href="https://www.instagram.com/caredash/"
          target="_blank">
            <img src={Instagram} alt="Instagram logo"/>
          </a>
        </span>
      </div>

    </div>
  );
}




export default Footer
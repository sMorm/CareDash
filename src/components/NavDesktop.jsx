import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Media
import Logo from './media/caredash-logo-heart.png';


const NavDesktop = (props) => {
  return (
    <div className="Nav">
      <NavLink to="/CareDash" onClick={props.closeDropDown}>
        <img src={ Logo } alt="CareDash Logo with Heart"/>
      </NavLink>
      <div  className="DropDownContainer">
        <p onClick={props.toggleDropDown} className="NavLink Drop">
          Ratings & Reviews &#9661;
        </p>
        {
          props.showDropDown
          ? (
                <ul>
                  <li>
                    <Link 
                    className="DropDownLinks Desktop"
                    to='/review-your-doctor'
                    onClick={props.toggleDropDown}>
                      Primary Care
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className="DropDownLinks Desktop"
                    to='/review-your-doctor'
                    onClick={props.toggleDropDown}>
                      Dentist
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className="DropDownLinks Desktop"
                    to='/review-your-doctor'
                    onClick={props.toggleDropDown}>
                      Pediatrician
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className="DropDownLinks Desktop"
                    to='/review-your-doctor'
                    onClick={props.toggleDropDown}>
                      OB/GYN
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className="DropDownLinks Desktop"
                    to='/review-your-doctor'
                    onClick={props.toggleDropDown}>
                      Optometrist
                    </Link>
                  </li>
                  <li>
                    <Link 
                    className="DropDownLinks Desktop"
                    to='/review-your-doctor'
                    onClick={props.toggleDropDown}>
                      All Doctors
                    </Link>
                  </li>
                   
                </ul>
            )
          : null
        }
      </div>
      <NavLink 
      to="/articles" 
      onClick={props.closeDropDown}
      className="NavLink" 
      activeClassName="NavLink active">
        Health & Wellness Articles
      </NavLink>
      <NavLink 
      to="/review-your-doctor" 
      onClick={props.closeDropDown}
      className="NavLink" 
      activeClassName="NavLink active">
        Leave a Review
      </NavLink>
    </div>
  )
} 

export default NavDesktop;
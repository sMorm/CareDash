import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Media
import Logo from './media/caredash-logo-heart.png';
import NavTab from './media/navtab.svg';


const NavMobile = (props) => {
  return (
    <div className="MobileNavContainer">
      <NavLink to="/CareDash" onClick={props.closeDropDown}>
        <img src={ Logo } alt="CareDash Logo with Heart" className="MobileLogo"/>
      </NavLink>
      <img 
      src={ NavTab }
      alt="Drop down mobile menu logo"
      className="MobileTab"
      onClick={props.toggleMobileMenu}/>
      {
        props.showMobileMenu
        ? (
            <div className="MobileDropDown">

                <Link 
                to="/CareDash" 
                className="DropDownLinks" 
                onClick={props.toggleMobileMenu}>
                  Home
                </Link>

                <Link 
                to="/articles" 
                className="DropDownLinks"
                onClick={props.toggleMobileMenu}>
                  Articles
                </Link>
                
                <Link 
                to="/review-your-doctor" 
                className="DropDownLinks"
                onClick={props.toggleMobileMenu}>
                  Write a Review
                </Link>
            </div>
          )
        : null
      }
    </div>
  )
} 

export default NavMobile;
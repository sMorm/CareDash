// Dependencies
import React, { Component } from 'react';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';

// Styles
import './styles/Navigation.css'

// Media
import Logo from './media/caredash-logo-heart.png';
import NavTab from './media/navtab.svg';

class Navigation extends Component {
  constructor(){
    super();
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      showMobileMenu: false,
      showDropDown: false
    }
  }
  toggleMobileMenu(){
    this.setState({ showMobileMenu: !this.state.showMobileMenu })
  }
  toggleDropDown() {
    this.setState({ showDropDown: !this.state.showDropDown })

  }
  render(){
    return (
      <div className="NavContainer">
      <Media query='(max-width: 800px)'>
        {matches => matches
          ? (
              <div className="MobileNavContainer">
                <NavLink to="/">
                  <img src={ Logo } alt="CareDash Logo with Heart" className="MobileLogo"/>
                </NavLink>
                <img 
                src={ NavTab }
                alt="Drop down mobile menu logo"
                className="MobileTab"
                onClick={this.toggleMobileMenu}/>
                {
                  this.state.showMobileMenu
                  ? (
                      <div className="MobileDropDown">
                        <ul>
                          <li>Primary Care</li>
                          <li>Dentist</li>
                          <li>Pediatrician</li>
                          <li>OG/GYN</li>
                          <li>Optometrist</li>
                          <li>All Doctors</li>
                        </ul>
                      </div>
                    )
                  : null
                }
              </div>
            )
           
          : (
              <div className="Nav">
                <NavLink to="/">
                  <img src={ Logo } alt="CareDash Logo with Heart"/>
                </NavLink>
                <div  className="DropDownContainer">
                  <p onClick={this.toggleDropDown} className="NavLink Drop">
                    Ratings & Reviews
                  </p>
                  {
                    this.state.showDropDown 
                    ? (
                          <ul>
                            <li>Primary Care</li>
                            <li>Dentist</li>
                            <li>Pediatrician</li>
                            <li>OG/GYN</li>
                            <li>Optometrist</li>
                            <li>All Doctors</li>
                          </ul>
                      )
                    : null
                  }
                </div>
                <NavLink to="/articles" className="NavLink" activeClassName="NavLink active">
                  Health & Wellness Articles
                </NavLink>
                <NavLink to="/review-your-doctor" className="NavLink" activeClassName="NavLink active">
                  Leave a Review
                </NavLink>
              </div>
            )
        }
      </Media>
      </div>
    )
  }
}

export default Navigation;
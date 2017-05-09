// Dependencies
import React, { Component } from 'react';
import Media from 'react-media';

// Components
import NavMobile from './NavMobile.jsx';
import NavDesktop from './NavDesktop.jsx';

// Styles
import './styles/Navigation.css'


/*
  The navigation bar that manages whether the modal
  should be on mobile or desktop, or simply when it's
  opened or closed.
*/

class Navigation extends Component {
  constructor(){
    super();
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.closeDropDown = this.closeDropDown.bind(this);
    this.state = {
      showMobileMenu: false,
      showDropDown: false
    }
  }
  toggleMobileMenu() {
    this.setState({ showMobileMenu: !this.state.showMobileMenu })
  }
  toggleDropDown() {
    this.setState({ showDropDown: !this.state.showDropDown })

  }
  closeDropDown() {
    this.setState({ showDropDown: false, showMobileMenu: false })
  }
  render(){
    return (
      <div className="NavContainer">
      <Media query='(max-width: 800px)'>
        {matches => matches
          ? <NavMobile
            toggleMobileMenu={this.toggleMobileMenu}
            closeDropDown={this.closeDropDown}
            showMobileMenu={this.state.showMobileMenu} />
           
          : <NavDesktop
            toggleDropDown={this.toggleDropDown}
            closeDropDown={this.closeDropDown}
            showDropDown={this.state.showDropDown} />
        }
      </Media>
      </div>
    )
  }
}

export default Navigation;
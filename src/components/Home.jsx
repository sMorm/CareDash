// Dependencies
import React, { Component } from 'react';
import Typist from 'react-typist';

// Components
import Headlines from './Headlines.jsx'
import SignUp from './SignUp.jsx'

// Styles
import './styles/Home.css'
import './styles/Typist.css'

// Media
import SearchIcon from './media/searchicon.svg'

/*
  The home component, the state manages what the user 
  searches, since there's no API for use right now,
  all it does is query the user's inputs.
*/


class Home extends Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state= {
      location: '',
      specialty: ''
    }
  }
  onSubmit(event){
    event.preventDefault();
    const { location, specialty } = this.state
    console.log(`API Request for ${specialty} in ${location}`)
  }
  onChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="HomeHeader">
          <div className="HomeText">
            <Typist 
            className="HomeText Typist"
            cursor={{ 
              hideWhenDone: true,
              hideWhenDoneDelay: 7000,
              stdTypingDelay: 50,
              avgTypingDelay: 100
            }}>
              Find, Compare, and Review Doctors
            </Typist>
            <p>Search by name, specialty, and location to get honest and transparent information, ratings, and reviews on your health care providers.</p>
            <div className="SearchContainer">
              <form onSubmit={this.onSubmit} className="SearchForm">
                <input 
                  className="SearchForm left"
                  type="text"
                  name="location"
                  autoComplete="off"
                  placeholder="Address or Zipcode"
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  required/>
                <input 
                  className="SearchForm right"
                  type="text"
                  name="specialty"
                  autoComplete="off"
                  placeholder="Doctor Name, Specialty, or Hospital"
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}
                  required/>
                <button><img src={SearchIcon} alt="Search Button"/></button>
              </form>
            </div>
          </div>
        </div>
        <Headlines />
        <SignUp />
      </div>
    );
  }
}

export default Home;
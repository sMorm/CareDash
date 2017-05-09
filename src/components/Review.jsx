// Dependencies
import React, { Component } from 'react';
import Typist from 'react-typist';

// Components
import DoctorProfile from './DoctorProfile.jsx';

// Styles
import './styles/Review.css';

// Media
import SearchIcon from './media/searchicon.svg';
import Doctor1 from './media/doctor1.jpg';
import Doctor2 from './media/doctor2.jpg';
import Doctor3 from './media/doctor3.jpg';
import Doctor4 from './media/doctor4.jpg';
import Doctor5 from './media/doctor5.jpg';


/*
  This is just a filler page that renders similarly to the homepage
*/

class Review extends Component {
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
              Search for Your Doctor and Write a Review
            </Typist>
            <p>Help Others Find the Best Care by Telling Us About Your Experience</p>
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
        <div className="ReviewContainer">
          <h1>Recently Reviewed</h1>
          <hr />
          <DoctorProfile
          img={Doctor1}
          name="Dr. Carey Dasher"
          specialty="Family Physician"/>
          <DoctorProfile
          img={Doctor2}
          name="Dr. Brandon Karl"
          specialty="OG/GYN"/>
          <DoctorProfile
          img={Doctor3}
          name="Dr. Connor Emma"
          specialty="Optometrist"/>
          <DoctorProfile
          img={Doctor4}
          name="Dr. Salem Shaheen"
          specialty="Pediatrician"/> 
          <DoctorProfile
          img={Doctor5}
          name="Dr. Mayur Khatri"
          specialty="Physician"/>        
        </div>
        <div style={{height: '120px'}} />
      </div>

    );
  }
}

export default Review;
// Dependencies
import React from 'react';

// Styles
import './styles/Headlines.css'

// Media
import Medicine from './media/medicine.svg';
import Heart from './media/heart.svg';
import Clipboard from './media/clipboard.svg';

/*
  Stateless Component that returns the headlines on the homepage
*/


const Headlines = () => {
  return(
    <div className="HeadlineContainer">
    <h1> See why others love CareDash </h1>
      <div className="HeadlineFlexContainer">
        <span>
          <img src={Medicine} alt="PrescriptionBottle"/>
          <h3>Manage Prescriptions</h3>
          <p>Lorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. </p>
        </span>
        <span>
          <img src={Heart} alt="Heart with Cross in Center"/>
          <h3>Active Lifestyle</h3>
          <p>Dolor ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore. </p>
        </span>
        <span>
          <img src={Clipboard} alt="Animated Clipboard"/>
          <h3>Staying on Track</h3>
          <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. </p>
        </span>
      </div>
      <hr />
    </div>
  )
}
export default Headlines;
// Dependencies
import React from 'react';

/*
  Stateless Component that returns a profile card
*/

const DoctorProfile = (props) => {
  return (
    <div className="DoctorProfile">
      <img src={props.img} alt="Doctor Name"/>
      <div className="DoctorInfo">
        <h3>{props.name}</h3>
        <p>{props.specialty}</p>
      </div>
    </div>
  )
} 

export default DoctorProfile;
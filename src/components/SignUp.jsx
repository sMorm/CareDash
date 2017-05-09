// Dependencies
import React, { Component } from 'react';

// Styles
import './styles/SignUp.css'

class SignUp extends Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      incorrectPass: false,
    }
  }
  onSubmit(event){
    event.preventDefault();
    const {
      password,
      confirmPassword
    } = this.state;
    if(password !== confirmPassword){
      this.setState({ incorrectPass: true })
    }
  }
  onChange(event){
    this.setState({
      [event.target.name]: event.target.value,
      incorrectPass: false
    })
  }
  render(){
    return(
      <div className="SignUpContainer">
        <h1>Sign Up with CareDash</h1>
        <div className="SignUpForm">
          {
            this.state.incorrectPass ? <p>Passwords do not match</p> :null
          }
          <form onSubmit={this.onSubmit}>
            <input 
            name="firstName"
            type="text"
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            placeholder="First Name"
            required/>
            <input 
            name="lastName"
            type="text"
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            placeholder="Last Name"
            required/>
            <input 
            name="email"
            type="email"
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            placeholder="Email"
            required/>
            <input 
            name="password"
            type="password"
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            placeholder="Password"
            required/>
            <input 
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            required/>
            <button> Sign Up </button>
          </form>
        </div>
        <hr />
      </div>
    )
  }
}

export default SignUp;
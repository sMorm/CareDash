// Dependencies
import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

// Styles
import './styles/SignUp.css'

// Media
import HeartLogo from './media/heart-logo.jpg';

class SignUp extends Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.memberLogin = this.memberLogin.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      incorrectPass: false,
      incorrectLength: false,
      signUpSuccess: false,
      loginSuccess: false,
      memberLogin: false
    }
  }
  onSubmit(event){
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password.length < 7) {
      this.setState({ incorrectLength: true})
    } 
    if (password !== confirmPassword){
      this.setState({ incorrectPass: true })
    } else {
      this.setState({ signUpSuccess: true})
    }

  }
  onChange(event){
    this.setState({
      [event.target.name]: event.target.value,
      incorrectPass: false,
      incorrectLength: false,
    })
  }
  onLogin(){
    this.setState({ signUpSuccess: true})
  }
  memberLogin(){
    this.setState({ memberLogin: !this.state.memberLogin })
  }
  render(){
    return(
      <div>
      <img src={HeartLogo} alt="CareDash heart logo" style={{display: 'none'}}/>
      {
        this.state.signUpSuccess || this.state.loginSuccess
        ? (
          <div>
            <Motion defaultStyle={{ x: 0, y: 3, }}
            style={{ x: spring(1), y: spring(1, {stiffness: 50, damping: 8})}}>
            {value => {
              const { x, y } = value;
              const style = {
                transform: `scale(${y})`,
                opacity: x,
              }
              return (
                <div style={style} className="SignUpSuccess">
                  Welcome to CareDash!
                  <img src={HeartLogo} alt="CareDash heart logo"/>
                </div>
                )
              } 
            }
            </Motion>
          </div>
          )
        : (
          <div className="SignUpContainer">
            { this.state.memberLogin ? <h1>Welcome back to CareDash!</h1> : <h1>Sign Up with CareDash</h1> }
            <div className="SignUpForm">
              { this.state.incorrectLength ? <p>Password must be longer than 6 characters.</p> :null }
              { this.state.incorrectPass ? <p>Passwords do not match.</p> :null }
              {
                this.state.memberLogin
                ? (
                  <form onSubmit={this.onLogin}>
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
                    <div 
                    className="MemberPortal"
                    onClick={this.memberLogin}>
                      New user?
                  </div>
                  <button> Login </button>
                  </form>
                  )
                : (
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
                  <div 
                  className="MemberPortal"
                  onClick={this.memberLogin}>
                    Already a member?
                  </div>
                  <button> Sign Up </button>
                </form>
                  )
              }
              
            </div>
            <hr />
          </div>
          )
      }
      </div>
    )
  }
}

export default SignUp;
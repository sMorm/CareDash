// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Navigation from './components/Navigation.jsx'
import Home from './components/Home.jsx'
import Articles from './components/Articles.jsx'
import Review from './components/Review.jsx'

// Styles
import './components/styles/Animations.css'



class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/articles" component={ Articles } />
            <Route path="/review-your-doctor" component={ Review } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;

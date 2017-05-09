// Dependencies
import React, { Component } from 'react';

// Components
import Loading from './Loading.jsx'

// Styles
import './styles/Articles.css'

// Media
import SampleImage from './media/article.jpg'
import SampleImage2 from './media/article2.jpg'

/*
  Another filler component for Health & Wellness Articles,
  the state manages whether the image has been loaded,
  if the user has slow connection, it will run a very
  performanant loading animation using only CSS.
*/

class Articles extends Component {
  constructor(){
    super();
    this.onLoad = this.onLoad.bind(this);
    this.state = {
      imagesLoaded: 0
    }
  }
  onLoad(){
    this.setState({ imagesLoaded: this.state.imagesLoaded + 1})
  }
  render() {
    return (
      <div>
      <img src={SampleImage2} alt="" onLoad={this.onLoad} style={{display: 'none'}}/>
      <img src={SampleImage2} alt="" onLoad={this.onLoad} style={{display: 'none'}}/>
      {
        this.state.imagesLoaded > 1
        ? (
            <div className="ArticleContainer">
              <h1>Featured Articles</h1>
              <div className="SampleArticle">
                <h2>Technology and your health</h2>
                <img src={SampleImage} alt="person holding phone"/>
              </div>
              <div style={{height: '50px'}}/>
              <div className="SampleArticle">
                <h2>Staying Healthy in the City</h2>
                <img src={SampleImage2} alt="City of Boston at Night"/>
              </div>
              <div style={{height: '50px'}}/>
            </div>
          )
        : <Loading />
      }
    </div>
    );
  }
}

export default Articles;
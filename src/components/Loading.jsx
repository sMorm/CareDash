import React from 'react';
import { ThreeBounce } from 'better-react-spinkit'

import './styles/Loading.css'

/*
  @Loading

  Renders loading animation,
*/

const Loading = () => {
  return(
    <div className="Loading-Container">
    <div style={{height: '200px'}}/>
      <div className="Spin-Kit">
        <ThreeBounce size={20} color='#EEEEEE' />
      </div>
      <p style={{textAlign: 'center'}}>
          Fetching Photos ..
      </p>
      <div style={{height: '500px'}}/>
    </div>
  )
}

export default Loading;
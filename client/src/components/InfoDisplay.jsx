import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import TeamInfoContainer from '../containers/teamInfoContainer.js';
import PollContainer from '../containers/pollContainer.js';
import StandingsContainer from '../containers/standingsContainer.js';

var InfoDisplay = (props) => {
  return(
    <div className="info-display-container">
      <Router>
        <div>
          <Route exact path='/' component={Welcome}/>
          <Route path='/standings' component={StandingsContainer} />
          <Route path='/poll/:id' component={PollContainer} />
          <Route path='/team/:team' component={TeamInfoContainer} />
        </div>
      </Router>  
    </div>
  )
}

const Welcome = () => {
  return(
    <div>
      <div>Welcome!</div>
      <p>I built this application to streamline the process of assembling a college football top 25 poll.</p>
    </div>
  )
}

export default InfoDisplay;
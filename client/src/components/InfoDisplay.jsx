import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import TeamInfoContainer from '../containers/teamInfoContainer.js';
import PollContainer from '../containers/pollContainer.js';
import StandingsContainer from '../containers/standingsContainer.js';
import { PrivateRouteContainer } from '../containers/navigationContainer.js';
import MyBallots from './MyBallots.jsx';
import * as firebase from 'firebase/app';
import 'firebase/auth';


var InfoDisplay = (props) => {
  return(
    <div className="info-display-container">
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/standings' component={StandingsContainer} />
          <Route path='/poll/:id' component={PollContainer} />
          <Route path='/team/:team' component={TeamInfoContainer} />
          <PrivateRouteContainer path='/my_ballots' component={MyBallots}/>
        </div>
      </Router>  
    </div>
  )
}

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{ paddingLeft: 30 }}>
        <div>Welcome!</div>
        <p>I built this application to streamline the process of assembling a college football top 25 poll.</p>
      </div>
    )
  }
}

export default InfoDisplay;
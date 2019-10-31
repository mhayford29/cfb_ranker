import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TeamInfoContainer from '../containers/teamInfoContainer.js';
import PollContainer from '../containers/pollContainer.js';
import StandingsContainer from '../containers/standingsContainer.js';
import Axios from 'axios';

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

class Welcome extends React.Component {
  componentDidMount(){
    Axios
      .get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=401114179`)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <div>Welcome!</div>
        <p>I built this application to streamline the process of assembling a college football top 25 poll.</p>
      </div>
    )
  }
}

export default InfoDisplay;
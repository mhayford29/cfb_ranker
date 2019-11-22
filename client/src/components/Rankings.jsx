import React from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import RankedTeamContainer from '../containers/rankedTeamContainer.js';
import { getWeekNumber, isValidDay } from '../../../dateFunctions.js'

class Rankings extends React.Component {
  constructor(props){
    super(props)
    this.handlePostRankings = this.handlePostRankings.bind(this);
  }
  
  handlePostRankings(){
    var week = getWeekNumber();
    axios.patch(`/api/userpolls`, {
      email: firebase.auth().currentUser.email,
      year: 2019,
      week: week,
      poll: this.props.rankings
    })
    .then(() => console.log('no error'))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="rankings-container">
        <div>Your poll for this week:</div>   
        {this.props.rankings.map((team, index) => {
          return <RankedTeamContainer team={team} index={index} />
        })}
        
          {!isValidDay() 
          ? <div className="test" onClick={this.handlePostRankings}>Save</div>
          : null}
        
      </div>
    )
  }
}

export default Rankings;
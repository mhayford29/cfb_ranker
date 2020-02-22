import React from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import RankedTeamContainer from '../containers/rankedTeamContainer.js';
import DateFunctions from '../../../dateFunctions.js'

class Rankings extends React.Component {
  constructor(props){
    super(props)
    this.handlePostRankings = this.handlePostRankings.bind(this);
  }

  handlePostRankings(){
    var today = new Date
    var week = DateFunctions.getWeekNumber();
    week < 0 ? week = 0 : null
    firebase.auth().currentUser === null ? alert('Error saving poll. Please sign in to save polls.') :
    axios.patch(`/api/userpolls`, {
      email: firebase.auth().currentUser.email,
      year: today.getFullYear(),
      week: week,
      poll: this.props.rankings
    })
    .then(() => alert('poll submitted successfully!'))
    .catch(err => alert('Error saving poll. Please sign in to save polls.'))
  }

  render(){
    return(
      <div className="rankings-container">
        <div style={{marginBottom: '10px'}}>Your way-too-early poll for 2020:</div>   
        {this.props.rankings.map((team, index) => {
          return <RankedTeamContainer team={team} index={index} />
        })}
        {DateFunctions.isValidDay() || DateFunctions.isValidWeek()
          ? <div className="test" onClick={this.handlePostRankings}>Save</div>
          : null}
      </div>
    )
  }
}

export default Rankings;
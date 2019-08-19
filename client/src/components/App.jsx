import React from 'react';
import Rankings from './Rankings.jsx';
import Navigation from './Navigation.jsx';
import InfoDisplay from './InfoDisplay.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      publishedRankings: {},
      teamData: {},
      schools: [],
      conf: '',
      rankedTeam: ''
    }
    this.fetchPoll = this.fetchPoll.bind(this);
    this.fetchTeam = this.fetchTeam.bind(this);
    this.addToRankings = this.addToRankings.bind(this);
  }

  addToRankings(team){
    this.setState({
      rankedTeam: team
    })
  }

  fetchPoll(pollId){
    Axios
      .get('http://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings')
      .then(({ data }) => {
        this.setState({
          publishedRankings: data.rankings[pollId]
        }, () => console.log(this.state.publishedRankings))
      })
      .catch(err => alert(err))
  }

  fetchTeam(schoolName){
    Axios
      .get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${schoolName}`)
      .then(({ data }) => {
        this.setState({
          teamData: data
        })
      })
      .catch(err => alert(err))
  }

  render(){
    return (
      <div>
        <div className="navigation">
          <Navigation 
            fetchPoll = {this.fetchPoll}
            fetchTeam = {this.fetchTeam}/>
        </div>
        <div className="appContainer">
          <div className="info-display">
            <InfoDisplay 
              publishedRankings = {this.state.publishedRankings} 
              teamData = {this.state.teamData}
              addToRankings = {this.addToRankings}/>
          </div>
          <div className="rankings">
            <Rankings team = {this.state.rankedTeam}/> 
          </div>
        </div>
      </div>
    )
  }
}


export default App;
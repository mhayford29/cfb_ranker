import React from 'react';
import Rankings from './Rankings.jsx';
import Navigation from './Navigation.jsx';
import InfoDisplay from './InfoDisplay.jsx';
import TeamSelectModal from './Modal.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      publishedRankings: {},
      teamData: {},
      teamDataTwo: {},
      standings: {},
      rankedTeam: '',
      modalIsOpen: false
    }
    this.fetchPoll = this.fetchPoll.bind(this);
    this.fetchTeam = this.fetchTeam.bind(this);
    this.fetchSecondTeam = this.fetchSecondTeam.bind(this);
    this.fetchStandings = this.fetchStandings.bind(this);
    this.addToRankings = this.addToRankings.bind(this);
    //modal methods
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      .get(`/api/team`, { params: { school: schoolName }})
      .then(({ data }) => {
        this.setState({
          teamData: data
        })
      })
      .catch(err => alert(err))
  }

  fetchSecondTeam(schoolName){
    Axios
      .get(`/api/team`, { params: { school: schoolName }})
      .then(({ data }) => {
        this.setState({
          teamDataTwo: data,
          modalIsOpen: false
        }, () => console.log(this.state.teamDataTwo))
      })
      .catch(err => alert(err))
  }

  fetchStandings(){
    Axios
      .get('http://site.api.espn.com/apis/v2/sports/football/college-football/standings')
      .then(({ data }) => {
        this.setState({
          standings: data
        })
      })
      .catch(err => console.log('error getting standings', err))
  }
  /******* MODAL METHODS *********/

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  /*******************************/

  render(){
    return (
      <div style={{ marginTop: '0px' }}>
        <div className="navigation">
          <Navigation 
            fetchPoll = {this.fetchPoll}
            fetchTeam = {this.fetchTeam}
            fetchStandings = {this.fetchStandings}/>
        </div>
        <div className="appContainer">
          <div className="info-display">
            <InfoDisplay 
              publishedRankings = {this.state.publishedRankings} 
              teamData = {this.state.teamData}
              teamDataTwo = {this.state.teamDataTwo}
              standings = {this.state.standings}
              addToRankings = {this.addToRankings}
              openModal = {this.openModal}/>
          </div>
          <div className="rankings">
            <Rankings team = {this.state.rankedTeam}/> 
          </div>
        </div>
        <TeamSelectModal 
          closeModal={this.closeModal}
          afterOpenModal={this.afterOpenModal}
          modalIsOpen={this.state.modalIsOpen}
          fetchTeam = {this.fetchSecondTeam}/>
      </div>
    )
  }
}


export default App;
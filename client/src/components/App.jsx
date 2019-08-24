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
      schools: [],
      conf: '',
      rankedTeam: '',
      modalIsOpen: false
    }
    this.fetchPoll = this.fetchPoll.bind(this);
    this.fetchTeam = this.fetchTeam.bind(this);
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
      .get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${schoolName}`)
      .then(({ data }) => {
        this.setState({
          teamData: data
        })
      })
      .catch(err => alert(err))
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
          modalIsOpen={this.state.modalIsOpen}/>
      </div>
    )
  }
}


export default App;
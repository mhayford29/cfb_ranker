import React from 'react';
import TeamSelectModal from './Modal.jsx';
import Axios from 'axios';
import MyRankingsContainer from '../containers/myRankingsContainer.js';
import NavigationContainer from '../containers/navigationContainer.js';
import InfoDisplayContainer from '../containers/infoDisplayContainer.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      publishedRankings: {},
      teamData: {},
      teamDataTwo: {},
      standings: {},
      rankedTeam: {},
      modalIsOpen: false
    }
    this.fetchSecondTeam = this.fetchSecondTeam.bind(this);
    //modal methods
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
          <NavigationContainer 
            //fetchPoll = {this.fetchPoll}
            //fetchTeam = {this.fetchTeam}
            fetchStandings = {this.fetchStandings}/>
        </div>
        <div className="appContainer">
          <div className="info-display">
            <InfoDisplayContainer
              publishedRankings = {this.state.publishedRankings} 
              teamData = {this.state.teamData}
              teamDataTwo = {this.state.teamDataTwo}
              standings = {this.state.standings}
              addToRankings = {this.addToRankings}
              openModal = {this.openModal}/>
          </div>
          <div className="rankings">
            <MyRankingsContainer /> 
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
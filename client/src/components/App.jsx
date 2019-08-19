import React from 'react';
import Modal from 'react-modal';
import Rankings from './Rankings.jsx';
import Navigation from './Navigation.jsx';
import InfoDisplay from './InfoDisplay.jsx';
import Axios from 'axios';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#app');

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
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    )
  }
}


export default App;
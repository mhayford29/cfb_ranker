import React from 'react';
import Axios from 'axios';
import TeamInfoItem from './TeamInfoItem.jsx';


class TeamInfoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayedTeam: [],
      modalIsOpen: false
    }
    this.fetchSecondTeam = this.fetchSecondTeam.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    const { team } = this.props
    Axios
      .get(`/api/team`, { params: { school: team }})
      .then(({ data }) => {
        console.log(data)
        this.setState({
          displayedTeam: data
        }, () => console.log(this.state.displayedTeam))
      })
      .catch(err => alert(err))
  }

  componentDidUpdate(prevProps){
    const { team } = this.props
    if(team !== prevProps.team){
      Axios
        .get(`/api/team`, { params: { school: team }})
        .then(({ data }) => {
          console.log(data)
          this.setState({
            displayedTeam: data
          }, () => console.log(this.state.displayedTeam))
        })
        .catch(err => alert(err))
    }
  }

  fetchSecondTeam(school){
    Axios
      .get(`/api/team`, { params: { school: school }})
      .then(({ data }) => {
        console.log(data[0])
        var newState = this.state.displayedTeam.concat(data[0]);
        this.setState({
          displayedTeam: newState,
          modalIsOpen: false
        })
      })
      .catch(err => alert(err))
  }

  /************ MODAL METHODS ************/

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

  /****************************************/

  render(){
    const { state } = this;
    if(state.displayedTeam.length){
      return(
        <div>
          {state.displayedTeam.map((team, index) => {
            return <TeamInfoItem 
              team={team}
              modalIsOpen={state.modalIsOpen}
              addToRankings={this.props.addToRankings}
              openModal={this.openModal}
              afterOpenModal={this.afterOpenModal}
              closeModal={this.closeModal}
              fetchTeam={this.fetchSecondTeam}/>
          })}
        </div>
      )
    } else{
      return(<div className="lds-dual-ring"></div>)
    }
  }
}

export default TeamInfoList;
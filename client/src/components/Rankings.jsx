import React from 'react';
import RankedTeam from './RankedTeam.jsx';
import RankedTeamContainer from '../containers/rankedTeamContainer.js';
//import myRankingsContainer from '../containers/myRankingsContainer.js'

class Rankings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rankings: []
    }
    //this.handleDelete = this.handleDelete.bind(this);
    //this.handleMoveUp = this.handleMoveUp.bind(this);
    //this.handleMoveDown = this.handleMoveDown.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.team !== prevProps.team) {
  //     var tempRankings = this.state.rankings.slice()
  //     tempRankings.push(this.props.team);
  //     this.setState({
  //       rankings: tempRankings
  //     })
  //   }
  // }

  // handleDelete(index){
  //   var tempRankings = this.state.rankings.slice()
  //   tempRankings.splice(index, 1)
  //   this.setState({
  //     rankings: tempRankings
  //   })
  // }

  // handleMoveUp(index){
  //   var tempRankings = this.state.rankings.slice()
  //   var tempValue = tempRankings[index - 1];
  //   tempRankings[index - 1] = tempRankings[index];
  //   tempRankings[index] = tempValue;
  //   this.setState({
  //     rankings: tempRankings
  //   })
  // }

  // handleMoveDown(index){
  //   var tempRankings = this.state.rankings.slice()
  //   var tempValue = tempRankings[index + 1];
  //   tempRankings[index + 1] = tempRankings[index];
  //   tempRankings[index] = tempValue;
  //   this.setState({
  //     rankings: tempRankings
  //   })
  // }

  render(){
    return(
      <div className="rankings-container">
        <div>Your poll for this week:</div>
        {this.props.rankings.map((team, index) => {
          return <RankedTeamContainer 
            team={team} 
            index={index} 
            //handleDelete={this.handleDelete} 
            //handleMoveUp={this.handleMoveUp} 
            //handleMoveDown={this.handleMoveDown}
          />
        })}
      </div>
    )
  }
}

export default Rankings;
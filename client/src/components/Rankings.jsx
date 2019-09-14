import React from 'react';

class Rankings extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rankings: []
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMoveUp = this.handleMoveUp.bind(this);
    this.handleMoveDown = this.handleMoveDown.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.team !== prevProps.team) {
      var tempRankings = this.state.rankings.slice()
      tempRankings.push(this.props.team);
      this.setState({
        rankings: tempRankings
      })
    }
  }

  handleDelete(index){
    var tempRankings = this.state.rankings.slice()
    tempRankings.splice(index, 1)
    this.setState({
      rankings: tempRankings
    })
  }

  handleMoveUp(index){
    var tempRankings = this.state.rankings.slice()
    var tempValue = tempRankings[index - 1];
    tempRankings[index - 1] = tempRankings[index];
    tempRankings[index] = tempValue;
    this.setState({
      rankings: tempRankings
    })
  }

  handleMoveDown(index){
    var tempRankings = this.state.rankings.slice()
    var tempValue = tempRankings[index + 1];
    tempRankings[index + 1] = tempRankings[index];
    tempRankings[index] = tempValue;
    this.setState({
      rankings: tempRankings
    })
  }

  render(){
    return(
      <div className="rankings-container">
        <div>This weeks Rankings:</div>
        {this.state.rankings.map((team, index) => {
          return <RankedTeam 
            team={team} 
            index={index} 
            handleDelete={this.handleDelete} 
            handleMoveUp={this.handleMoveUp} 
            handleMoveDown={this.handleMoveDown}/>
        })}
        <button>save</button>
      </div>
    )
  }
}

const RankedTeam = (props) => {
  return(
    <div className="ranked-team-container">
      <div>
        {props.index + 1}. {props.team.school} <img src={props.team.logo} height={20} width={20}></img>
      </div>
      <div>{props.team.record}</div>
      <div className="up" onClick={() => props.handleMoveUp(props.index)}>
        <i className="up-arrow"></i>
      </div>
      <div className="down" onClick={() => props.handleMoveDown(props.index)}>
        <i className="down-arrow"></i>
      </div>
      <div className="remove" onClick={() => props.handleDelete(props.index)}>
        X
      </div>
    </div>
  )
}

export default Rankings;
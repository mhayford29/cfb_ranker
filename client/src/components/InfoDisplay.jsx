import React from 'react';

class InfoDisplay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      poll: {},
      teams: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.publishedRankings !== prevProps.publishedRankings) {
      this.setState({
        poll: this.props.publishedRankings,
        teams: []
      })
    } else if (this.props.teamData !== prevProps.teamData) {
      this.setState({
        poll: {},
        teams: [this.props.teamData]
      }, () => console.log(this.state.teams))
    } else if(this.props.teamDataTwo !== prevProps.teamDataTwo) {
      var tempTeams = this.state.teams.slice();
      tempTeams.push(this.props.teamDataTwo)
      this.setState({
        teams: tempTeams
      })
    }
  }

  render(){
    return(
      <div className="info-display-container">
        {this.state.poll.name ? 
          <Poll 
            poll={this.state.poll}
            addToRankings={this.props.addToRankings}/> : 
        this.state.teams.length ? this.state.teams.map((team, index) => {
          return  <Team 
            team={team}
            addToRankings={this.props.addToRankings}
            openModal={this.props.openModal}/> 
        }) :
          <Welcome />}
      </div>
    )
  }
}

const Team = (props) => {
  const { team } = props.team;
  return(
    <div>
      <div className="team-header-container">
        <span width={200} height={200}>
          <img src={team.logos[0].href} width={200} height={200}></img>
        </span>
        <span style={{ fontSize: '35px', textAlign: 'center', margin: 'auto'}}>
          {team.location} {team.name}
        </span>
        <div 
          className="add-to-rankings" 
          style={{ color: `#${team.color}`, borderColor: `#${team.alternateColor}` }}
          onClick={() => props.addToRankings(team.location)}>
          Add To Rankings
        </div>
      </div>
      <div className="team-stats-container">
        <div>
          <div>
            Record: {team.record.items[0].stats[1].value} - {team.record.items[0].stats[2].value} 
          </div>
          <div>
            Streak: {team.record.items[0].stats[15].value}
          </div>
        </div>
        <div>
          <div>
            Points For and Against: {team.record.items[0].stats[9].value} - {team.record.items[0].stats[10].value}
          </div>
          <div>
            Point Differential: {team.record.items[0].stats[14].value}
          </div>
        </div>
        <button onClick={props.openModal}>+ Compare Team</button>
      </div>
    </div>
  )
}

const Poll = (props) => {
  return(
    <div>
      <div>
        {props.poll.name}
      </div>
      {props.poll.ranks.map((team, index) => {
        return <div style={{fontSize: '25px'}}>{team.current}. {team.team.location} {team.recordSummary} <button onClick={() => props.addToRankings(team.team.location)}>add</button></div>
      })}
    </div>
  )
}

const Welcome = () => {
  return(
    <div>
      Welcome!
    </div>
  )
}

export default InfoDisplay;
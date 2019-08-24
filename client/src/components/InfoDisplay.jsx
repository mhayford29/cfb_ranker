import React from 'react';

class InfoDisplay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      poll: {},
      team: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.publishedRankings !== prevProps.publishedRankings) {
      this.setState({
        poll: this.props.publishedRankings,
        team: {}
      })
    } else if (this.props.teamData !== prevProps.teamData) {
      this.setState({
        team: this.props.teamData,
        poll: {}
      }, () => console.log(this.state.team))
    }
  }

  render(){
    return(
      <div className="info-display-container">
        {this.state.poll.name ? 
          <Poll 
            poll={this.state.poll}
            addToRankings={this.props.addToRankings}/> : 
        this.state.team.team ? 
          <Team 
            team={this.state.team}
            addToRankings={this.props.addToRankings}
            openModal={this.props.openModal}
          /> : 
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
      {team.record.items[0].stats.map((stat, index) => {
        return <div style={{ fontSize: '20px'}}>{index + 1}. {stat.name}: {stat.value}</div>
      })}
      <button onClick={props.openModal}>+ Compare Team</button>
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
import React from 'react';
import Standings from './Standings.jsx';

class InfoDisplay extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      poll: {},
      teams: [],
      standings: {}
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.publishedRankings !== prevProps.publishedRankings) {
      this.setState({
        poll: this.props.publishedRankings,
        teams: [],
        standings: {}
      })
    } else if(this.props.standings !== prevProps.standings){
      this.setState({
        poll: {},
        teams: [],
        standings: this.props.standings
      })
    } else if (this.props.teamData !== prevProps.teamData) {
      this.setState({
        poll: {},
        teams: [this.props.teamData],
        standings: {}
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
        this.state.standings.name ?
          <Standings 
            standings={this.state.standings}
            addToRankings={this.props.addToRankings}/> :
          <Welcome />}
      </div>
    )
  }
}

const Team = (props) => {
  console.log('Hello inside Team component', props.team[0])
  var teamInfo = {
    school: props.team[0].school,
    record: `${props.team[0].stats[1].value}-${props.team[0].stats[2].value}`,
    logo: props.team[0].logos[0]
  }
  return(
    <div>
      <div className="team-header-container">
        <span width={200} height={200}>
          <img src={props.team[0].logos[0]} width={200} height={200}></img>
        </span>
        <span style={{ fontSize: '35px', textAlign: 'center', margin: 'auto'}}>
          {props.team[0].location} {props.team[0].name}
        </span>
        <div 
          className="add-to-rankings" 
          style={{ color: `#${props.team[0].color}`, borderColor: `#${props.team[0].alternateColor}` }}
          onClick={() => props.addToRankings(teamInfo)}>
          <span>Add To Rankings</span>
        </div>
      </div>
      <div className="team-stats-container">
        <div>
          <div>
            Record: {props.team[0].stats[1].value} - {props.team[0].stats[2].value} 
          </div>
          <div>
            Streak: {props.team[0].stats[15].value}
          </div>
        </div>
        <div>
          <div>
            Points For and Against: {props.team[0].stats[9].value} - {props.team[0].stats[10].value}
          </div>
          <div>
            Point Differential: {props.team[0].stats[14].value}
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
        return <PollItem team={team} rank={index + 1} addToRankings={props.addToRankings}/>
      })}
      <div style={{ marginBottom: '30px' }}>
        Others recieving votes: <br/>
        {props.poll.others.map((team, index) => {
          return <span style={{ fontSize: '25px' }}>{team.team.location}: {team.points},{'  '}</span>
        })}
      </div>
    </div>
  )
}

const PollItem = (props) => {
  const { team } = props;
  var teamInfo = { 
    school: team.team.location,
    record: team.recordSummary,
    logo: team.team.logo
  }
  return(
    <div className="poll-item-container">
      <div>
        {props.rank}. {team.team.location}
      </div>
      <div>
        <img src={team.team.logo} className="thumbnail"></img>{team.recordSummary}
      </div>
      <div>
      <button className="button" onClick={() => props.addToRankings(teamInfo)}>Rank {team.team.location}</button>
      </div>
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
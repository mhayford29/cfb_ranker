import React from 'react';
import Schedule from './Schedule.jsx';

var TeamInfo = (props) => {
  console.log(props)
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
      <div className="team-stats">
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
        </div>
        <div style={{ fontSize: '40px' }}>Games Played</div>
        <Schedule schedule={props.team[0].game_data} id={props.team[0].schoolId}/>
        <div>
          <button onClick={props.openModal}>+ Compare Team</button>
        </div>
      </div>
    </div>
  )
}

export default TeamInfo;
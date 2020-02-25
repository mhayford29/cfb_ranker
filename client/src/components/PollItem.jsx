import React from 'react';

const PollItem = (props) => {
  const { team, rank } = props;
  var teamInfo = { 
    school: team.team.location,
    record: team.recordSummary,
    logo: team.team.logo
  }
  var backgroundColor;
  rank % 2 === 1 ? backgroundColor = 'rgb(218, 218, 218)' : null
  return(
    <div className="poll-item-container" style={{background: backgroundColor}}>
      <div>
        {rank}. {team.team.location}
      </div>
      <div>
        <img src={team.team.logo} className="thumbnail"></img>{team.recordSummary}
      </div>
      <div>
        <div style={{marginLeft: '25%'}} className="conference-item-rank-button" onClick={() => props.addToRankings(teamInfo)}><span>Rank {team.team.location}</span></div>
      </div>
    </div>
  )
}

export default PollItem;
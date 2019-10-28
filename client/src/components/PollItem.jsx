import React from 'react';

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

export default PollItem;
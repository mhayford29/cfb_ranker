import React from 'react';
import RankedTeamContainer from '../containers/rankedTeamContainer.js';

var Rankings = (props) => (
  <div className="rankings-container">
    <div>Your poll for this week:</div>
      {props.rankings.map((team, index) => {
        return <RankedTeamContainer 
          team={team} 
          index={index} 
        />
      })}
  </div>
)

export default Rankings;
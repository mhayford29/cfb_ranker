import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import RankedTeamContainer from '../containers/rankedTeamContainer.js';

var Rankings = (props) => {
  return(
    <div className="rankings-container">
      <div>Your poll for this week:</div>   
      {props.rankings.map((team, index) => {
        return <RankedTeamContainer team={team} index={index} />
      })}
    </div>
  )
}

export default Rankings;
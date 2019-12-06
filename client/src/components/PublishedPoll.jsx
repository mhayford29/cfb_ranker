import React from 'react';
import { PollItemContainer } from '../containers/conferenceItemContainer.js';

var PublishedPoll = (props) => {
  const { id } = props.match.params;
  if(props.publishedPolls.length){
    return(
      <div>
        <div>
          {props.publishedPolls[id].name}
        </div>
        {props.publishedPolls[id].ranks.map((team, index) => {
          return <PollItemContainer team={team} rank={index + 1} addToRankings={props.addToRankings}/>
        })}
        <div style={{ marginBottom: '30px' }}>
          Others recieving votes: <br/>
          {props.publishedPolls[id].others.map((team, index) => {
            return <span style={{ fontSize: '25px' }}>{team.team.location}: {team.points},{'  '}</span>
          })}
        </div>
      </div>
    )
  } else{
    return(
      <div className="lds-dual-ring"></div>
    )
  }
}

export default PublishedPoll;
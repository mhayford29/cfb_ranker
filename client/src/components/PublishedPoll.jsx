import React from 'react';
import { PollItemContainer } from '../containers/conferenceItemContainer.js';

var PublishedPoll = (props) => {
  const { id } = props.match.params;
  if(props.publishedPolls.length){
    return(
      <div style={{marginLeft: '150px', marginRight: '150px'}}>
        <div style={{textAlign: 'center'}}>
          {props.publishedPolls[id].name}
        </div>
        {props.publishedPolls[id].ranks.map((team, index) => {
          return <PollItemContainer team={team} rank={index + 1} addToRankings={props.addToRankings}/>
        })}
        <div style={{ margin: '15px 0px 30px 0px', fontSize: '30px' }}>
          Others recieving votes: <br/>
          {props.publishedPolls[id].others.map((team, index) => {
            return index === props.publishedPolls[id].others.length - 1
            ?  <span style={{ fontSize: '18px' }}>{team.team.location}: <b>{team.points}</b></span>
            :  <span style={{ fontSize: '18px' }}>{team.team.location}: <b>{team.points}</b>,{'  '}</span>
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
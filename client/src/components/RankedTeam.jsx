import React from 'react';

const RankedTeam = (props) => {
  console.log(props);
  return(
    <div className="ranked-team-container">
      <div>
        {props.index + 1}. {props.team.school} <img src={props.team.logo} height={20} width={20}></img>
      </div>
      <div>{props.team.record}</div>
      <div className="up" onClick={() => props.handleMoveUp(props.index)}>
        <i className="up-arrow"></i>
      </div>
      <div className="down" onClick={() => props.handleMoveDown(props.index)}>
        <i className="down-arrow"></i>
      </div>
      <div className="remove" onClick={() => props.handleDelete(props.index)}>
        X
      </div>
    </div>
  )
}

export default RankedTeam;
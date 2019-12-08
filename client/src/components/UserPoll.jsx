import React from 'react';
import PollItem from './PollItem.jsx';

const UserPoll = (props) => {
  const { polls } = props;
  const { week, year } = props.match.params;
  const pollByWeek = polls.filter(e => e._id == year)[0].polls.filter(e => e.week == week)
  return(
    <div style={{ fontSize: '16px'}}>
      {pollByWeek[0].poll.map((team, index) => {
        return <UserPollItem team={team} index={index}/>
      })}
    </div>
  )
}

const UserPollItem = (props) => {
  const { team } = props;
  return(
    <div className="user-poll-item-container">
      <div>
        {props.index + 1}. {team.school}
      </div>
      <div>
        <img src={team.logo} style={{ height: '16', width: '16' }}></img>{team.record}
      </div>
    </div>
  )
}

export default UserPoll;
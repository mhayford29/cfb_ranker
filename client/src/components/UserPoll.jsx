import React from 'react';
import PollItem from './PollItem.jsx';

const UserPoll = (props) => {
  const { polls } = props;
  const { week, year } = props.match.params;
  const pollByWeek = polls.filter(e => e._id == year)[0].polls.filter(e => e.week == week)
  console.log(pollByWeek)
  return(
    <div>
      {pollByWeek[0].poll.map((team, index) => {
        return <div>{index + 1}. {team.school}</div>
      })}
    </div>
  )

  // if(polls){
  //   return(
  //     <div>
  //       <div>
  //         {props.publishedPolls[id].name}
  //       </div>
  //       {props.publishedPolls[id].ranks.map((team, index) => {
  //         return <PollItemContainer team={team} rank={index + 1} addToRankings={props.addToRankings}/>
  //       })}
  //       <div style={{ marginBottom: '30px' }}>
  //         Others recieving votes: <br/>
  //         {props.publishedPolls[id].others.map((team, index) => {
  //           return <span style={{ fontSize: '25px' }}>{team.team.location}: {team.points},{'  '}</span>
  //         })}
  //       </div>
  //     </div>
  //   )
  // } else{
    // return(
    //   <div>not here!!</div>
    // )
  //}
}

export default UserPoll;
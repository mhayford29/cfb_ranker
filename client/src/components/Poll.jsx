import React from 'react';
import { PollItemContainer } from '../containers/conferenceItemContainer.js';

class Poll extends React.Component{
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   this.props.fetchPoll(this.props.id);
  // }

  // componentDidUpdate(prevProps){
  //   if(this.props.id !== prevProps.id){
  //     this.props.fetchPoll(this.props.id)
  //   }
  // }

  render(){
    const { props } = this;
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
}

export default Poll;
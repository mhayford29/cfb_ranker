import React from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyBallots extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      polls: []
    }
    this.fetchUserPolls = this.fetchUserPolls.bind(this);
  }
  
  componentDidMount(){
    this.fetchUserPolls();
  }

  fetchUserPolls(){
    axios.get(`/api/userpolls`, {
      email: firebase.auth().currentUser.email
    })
    .then(({ data }) => {
      this.setState({
        polls: data
      }, () => console.log(this.state.polls))
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div style={{ paddingLeft: '25px', paddingTop: '25px' }}>
        <div style={{ textAlign: 'center' }}>My Ballots</div>
        {this.state.polls.map((year, index) => {
          return <BallotItem year={year} index={index}/>
        })}
      </div>
    )
  }
}

var BallotItem = (props) => {
  const { year } = props
  return(
    <div>
      <div style={{ borderBottom: '1px' }}>{year._id}</div>
      {year.polls.map((week, index) => {
        return <div style={{ fontSize: 20 }}>Week {week.week}</div>
      })}
    </div>
  )
}

export default MyBallots;
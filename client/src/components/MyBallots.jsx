import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { PrivateRouteContainer } from '../containers/navigationContainer.js';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import UserPoll from './UserPoll.jsx';

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
        <div className='ballot-container'>
          {this.state.polls.map((year, index) => {
            return <BallotItem year={year} index={index}/>
          })}
          <Router>
            <div>
              <Route 
                path={`/my_ballots/:year/:week`} 
                render={(props) => <UserPoll {...props} polls={this.state.polls}/>}>
              </Route>
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

var BallotItem = (props) => {
  const { year } = props
  return(
    <div>
      <div style={{ borderBottom: '1px' }}>{year._id}</div>
      <Router>
        {year.polls.map((week, index) => {
          return(
            <div style={{ fontSize: 20 }}>
              <Link to={`/my_ballots/${year._id}/${week.week}`}>
                Week {week.week}
              </Link>
            </div>
          )
        })}
      </Router>
    </div>
  )
}

export default MyBallots;
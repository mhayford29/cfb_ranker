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
      this.state.polls 
      ? <div>Under Construction</div>
      : <div className="lds-dual-ring"></div>
    )
  }
}

export default MyBallots;
import React from 'react';
import axios from 'axios';
import MyRankingsContainer from '../containers/myRankingsContainer.js';
import { NavigationContainer } from '../containers/navigationContainer.js';
import InfoDisplayContainer from '../containers/infoDisplayContainer.js';
import LoginModalContainer from '../containers/loginModalContainer.js';
import * as firebase from 'firebase/app';
import 'firebase/auth'

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount(){
    
    //check for a signed-in user

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.toggleLogin()
      } else{
        this.props.toggleLogout()
      }
    })

    //get polls to send to redux store

    this.props.fetchPoll();
  }

  handleSignOut(){
    firebase.auth().signOut()
      .then(() => {
        console.log('signed out')
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render(){
    return(
      <div>
        {this.props.loginModalisOpen ? 
          <LoginModalContainer /> :
          null
        }
        <div>
          <div className="navigation">
            <NavigationContainer handleSignOut={this.handleSignOut}/>
          </div>
          <div className="appContainer" onClick={() => this.props.toggleLoginModal(false)}>
            <div className="info-display">
              <InfoDisplayContainer />
            </div>
            <div className="rankings">
              <MyRankingsContainer /> 
            </div>
          </div>
        </div>
      </div>  
    )
  }
}



export default App;
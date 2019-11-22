import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class SignUpLoginModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      dispayName: '',
      password: '',
      reEnteredPassword: '',
      createUser: false,
    }
    this.preventModalClose = this.preventModalClose.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handlePasswordVerify = this.handlePasswordVerify.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleDisplayNameInput = this.handleDisplayNameInput.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleSignInUser = this.handleSignInUser.bind(this);
    this.toggleCreateUser = this.toggleCreateUser.bind(this);
  } 

  toggleCreateUser(){
    this.state.createUser ? 
    this.setState({
      createUser: false 
    }) :
    this.setState({
      createUser: true
    })
  }

  handleEmailInput(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordInput(e){
    this.setState({
      password: e.target.value
    })
  }

  handleDisplayNameInput(e){
    this.setState({
      dispayName: e.target.value
    })
  }

  handlePasswordVerify(e){
    this.setState({
      reEnteredPassword: e.target.value
    })
  }

  handleCreateUser(){
    const { email, password, reEnteredPassword } = this.state;
    if(password === reEnteredPassword){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.state.dispayName
        }).then(() => {

          /* CREATE USER POLLS */

          console.log('user successfully created')
          this.props.toggleLoginModal(false)
        }).catch((error) => {
          console.log(error)
        });
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(error){
          console.log(errorCode, errorMessage)
        }
      });
    } else{
      alert(`passwords don't match`)
    }
  }

  handleSignInUser(){
    var { email, password } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => this.props.toggleLoginModal(false))  
    .catch(err => console.log(err.message, err.message))
  }

  preventModalClose(e){
    e.stopPropagation();
  }

  render(){
    return(
      <div className='modal' onClick={() => this.props.toggleLoginModal(false)}>
        <div className='modal-content' onClick={(e) => this.preventModalClose(e)}>
          {this.state.createUser ? 
            <SignUp 
              handleEmailInput={this.handleEmailInput}
              handlePasswordInput={this.handlePasswordInput}
              handlePasswordVerify={this.handlePasswordVerify}
              handleDisplayNameInput={this.handleDisplayNameInput}
              handleCreateUser={this.handleCreateUser}
              toggleCreateUser={this.toggleCreateUser}/> :
            <SignIn 
              handleEmailInput={this.handleEmailInput}
              handlePasswordInput={this.handlePasswordInput}
              handleSignInUser={this.handleSignInUser}
              toggleCreateUser={this.toggleCreateUser}/>
          }
        </div>
      </div>
    )
  }
}

var  SignIn = (props) => {
  return(
    <div className='login'>
      <div>Sign In</div>
      <form>
        <div>Email:</div>
        <input type='text' onChange={(e) => props.handleEmailInput(e)}></input> <br/>
        <div>Password</div>
        <input type='password' onChange={(e) => props.handlePasswordInput(e)}></input> <br/>
        <button type='submit' onClick={props.handleSignInUser}>Sign In</button> <br/>
      </form>
      <button onClick={props.toggleCreateUser}>Create User</button>
    </div> 
  )
}

var SignUp = (props) => {
  return(
    <div className='sign-up'>
      <div>Sign Up</div>
      <form>
        <div>Email:</div>
        <input type="text" onChange={(e) => props.handleEmailInput(e)}></input> <br/>
        <div>Display Name</div>
        <input type="text" onChange={(e) => props.handleDisplayNameInput(e)}></input> <br/>
        <div>Password</div>
        <input type='password' onChange={(e) => props.handlePasswordInput(e)}></input> <br/>
        <div>Re Enter Password</div>
        <input type='password' onChange={(e) => props.handlePasswordVerify(e)}></input> <br/>
        <button type='submit' onClick={props.handleCreateUser}>Create User</button>
      </form>
      <button onClick={props.toggleCreateUser}>Sign In</button>
    </div>
  )
}

export default SignUpLoginModal;
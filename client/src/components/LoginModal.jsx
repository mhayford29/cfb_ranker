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

  toggleCreateUser(toggle){
    toggle === 'on'?
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
    if(!this.state.createUser){
      var login = 'toggled-signup-login'
      var signup = 'untoggled-signup-login'
    } else{
      var login = 'untoggled-signup-login'
      var signup = 'toggled-signup-login'
    }

    var borderLeft = {
      borderLeftStyle: 'solid',
      borderLeftColor: 'black',
      borderLeftWidth: '1px'
    }

    return(
      <div className='modal' onClick={() => this.props.toggleLoginModal(false)}>
        <div className='modal-content' onClick={(e) => this.preventModalClose(e)}>
          <div className='inner-border'>
            <div className='toggle-login-signup-container'>
              <div className={login} onClick={() => this.toggleCreateUser('on')}>Log In</div>
              <div className={signup} style={borderLeft} onClick={() => this.toggleCreateUser('off')}>Sign Up</div>
            </div>
            <div className='center'>
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
        </div>
      </div>
    )
  }
}

var  SignIn = (props) => {
  return(
    <div className='login'>
      <form>
        <div className='center'>Email</div>
        <div className='center'>
          <input type='text' className='input-field' onChange={(e) => props.handleEmailInput(e)}></input> <br/>
        </div>
        <div className='center'>Password</div>
        <div className='center'>
          <input type='password' className='input-field' onChange={(e) => props.handlePasswordInput(e)}></input> <br/>
        </div>
      </form>
      <div className='submit' onClick={props.handleSignInUser}>Submit</div> <br/>
    </div> 
  )
}

var SignUp = (props) => {
  return(
    <div className='login'>
      <form>
        <div className='center'>Email</div>
        <div className='center'>
          <input type="text" className='input-field' onChange={(e) => props.handleEmailInput(e)}></input> <br/>
        </div>
        <div className='center'>Display Name</div>
        <div className='center'>
          <input type="text" className='input-field' onChange={(e) => props.handleDisplayNameInput(e)}></input> <br/>
        </div>
        <div className='center'>Password</div>
        <div className='center'>
          <input type='password' className='input-field' onChange={(e) => props.handlePasswordInput(e)}></input> <br/>
        </div>
        <div className='center'>Re Enter Password</div>
        <div className='center'>
          <input type='password' className='input-field' onChange={(e) => props.handlePasswordVerify(e)}></input> <br/>
        </div>
      </form>
      <div className='submit' onClick={props.handleCreateUser}>Submit</div>
    </div>
  )
}

export default SignUpLoginModal;
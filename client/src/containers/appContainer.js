import { connect } from 'react-redux';
import App from '../components/App.jsx';
import { toggleModal } from '../actions/loginModal.js';
import { handleFetchPoll } from '../actions/polls.js';
import { toggleLogin, toggleLogout } from '../actions/toggleLogin.js';


var mapStateToProps = (state) => ({
  loginModalisOpen: state.loginModalisOpen
})

var mapDispatchToProps = (dispatch) => ({
  toggleLoginModal: (flag) => {
    dispatch(toggleModal(flag))
  },
  toggleLogin: () => {
    dispatch(toggleLogin())
  },
  toggleLogout: () => {
    dispatch(toggleLogout())
  },
  fetchPoll: () => {
    dispatch(handleFetchPoll())
  }
})

var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
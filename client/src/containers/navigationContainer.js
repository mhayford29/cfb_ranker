import { connect } from 'react-redux';
import { handleFetchTeam } from '../actions/teamInfo.js';
import { handleFetchPoll } from '../actions/polls.js';
import { handleFetchStandings } from '../actions/standings.js';
import { toggleModal } from '../actions/loginModal.js';
import Navigation from '../components/Navigation.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';

var mapStateToProps = (state, ownProps) => ({
  loginStatus: state.loginStatus,
  signOut: ownProps.handleSignOut
})

var mapDispatchToProps = (dispatch) => ({
  fetchTeam: (query) => {
    dispatch(handleFetchTeam(query))
  },
  fetchPoll: (id) => {
    dispatch(handleFetchPoll(id))
  },
  fetchStandings: () => {
    dispatch(handleFetchStandings())
  },
  toggleLoginModal: (flag) => {
    dispatch(toggleModal(flag))
  }
})

var containerCreator = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })

export const NavigationContainer = containerCreator(Navigation)
export const PrivateRouteContainer = containerCreator(PrivateRoute)
import { connect } from 'react-redux';
import { handleFetchTeam } from '../actions/teamInfo.js';
import { handleFetchStandings } from '../actions/standings.js';
import { toggleModal } from '../actions/loginModal.js';
import Navigation from '../components/Navigation.jsx';
import PrivateRoute from '../components/PrivateRoute.jsx';

var mapStateToProps = (state, ownProps) => ({
  loginStatus: state.loginStatus,
  signOut: ownProps.handleSignOut,
  publishedPolls: state.polls
})

var mapDispatchToProps = (dispatch) => ({
  fetchTeam: (query) => {
    dispatch(handleFetchTeam(query))
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
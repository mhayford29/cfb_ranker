import { connect } from 'react-redux';
import { handleFetchTeam } from '../actions/teamInfo.js';
import { handleFetchPoll } from '../actions/polls.js';
import { handleFetchStandings } from '../actions/standings.js';
import Navigation from '../components/Navigation.jsx';

var mapStateToProps = (state) => ({})

var mapDispatchToProps = (dispatch) => ({
  fetchTeam: (query) => {
    dispatch(handleFetchTeam(query))
  },
  fetchPoll: (id) => {
    dispatch(handleFetchPoll(id))
  },
  fetchStandings: () => {
    dispatch(handleFetchStandings())
  }
})

var NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation)

export default NavigationContainer;
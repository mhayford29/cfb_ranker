import { connect } from 'react-redux';
import { handleFetchStandings } from '../actions/standings.js';
import Standings from '../components/Standings.jsx';

var mapStateToProps = (state) => ({
  standings: state.standings
})

var mapDispatchToProps = (dispatch) => ({
  fetchStandings: () => {
    dispatch(handleFetchStandings())
  }
})

var StandingsContainer = connect(mapStateToProps, mapDispatchToProps)(Standings);

export default StandingsContainer;
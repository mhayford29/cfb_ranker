import { connect } from 'react-redux';
import TeamInfo from '../components/TeamInfo.jsx';
import { addTeam } from '../actions/myRankings.js';

var mapStateToProps = (state, ownProps) => ({
  team: ownProps.team
})

var mapDispatchToProps = (dispatch) => ({
  addToRankings: (team) => {
    dispatch(addTeam(team))
  }
})

var TeamInfoContainer = connect(mapStateToProps, mapDispatchToProps)(TeamInfo)

export default TeamInfoContainer;

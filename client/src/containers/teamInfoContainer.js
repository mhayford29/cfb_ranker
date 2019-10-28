import { connect } from 'react-redux';
import TeamInfoList from '../components/TeamInfoList.jsx';
import { addTeam } from '../actions/myRankings.js';

var mapStateToProps = (state, ownProps) => ({
  team: ownProps.match.params.team
})

var mapDispatchToProps = (dispatch) => ({
  addToRankings: (team) => {
    dispatch(addTeam(team))
  }
})

var TeamInfoContainer = connect(mapStateToProps, mapDispatchToProps)(TeamInfoList)

export default TeamInfoContainer;

import { connect } from 'react-redux';
import RankedTeam from '../components/RankedTeam.jsx'
import { removeTeam, moveUp, moveDown } from '../actions/myRankings.js';

var mapStateToProps = (state, ownProps) => ({
  team: ownProps.team,
  index: ownProps.index
})

var mapDispatchToProps = (dispatch) => ({
  handleDelete: (index) => {
    dispatch(removeTeam(index))
  },
  handleMoveUp: (index) => {
    dispatch(moveUp(index))
  },
  handleMoveDown: (index) => {
    dispatch(moveDown(index))
  }
})

var RankedTeamContainer = connect(mapStateToProps, mapDispatchToProps)(RankedTeam)

export default RankedTeamContainer;

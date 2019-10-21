import { connect } from 'react-redux';
import ConferenceItemFormat from '../components/ConferenceItemFormat';
import { addTeam } from '../actions/myRankings.js';

var mapStateToProps = (state, ownProps) => ({
  item: ownProps.item,
  index: ownProps.index
})

var mapDispatchToProps = (dispatch) => ({
  addToRankings: (team) => {
    dispatch(addTeam(team))
  }
})

var ConferenceItemContainer = connect(mapStateToProps, mapDispatchToProps)(ConferenceItemFormat)

export default ConferenceItemContainer;
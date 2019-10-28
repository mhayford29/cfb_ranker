import { connect } from 'react-redux';
import ConferenceItemFormat from '../components/ConferenceItemFormat.jsx';
import PollItem from '../components/PollItem.jsx'
import { addTeam } from '../actions/myRankings.js';

var mapStateToProps = (state, ownProps) => ({
  item: ownProps.item,
  index: ownProps.index,
  team: ownProps.team
})

var mapDispatchToProps = (dispatch) => ({
  addToRankings: (team) => {
    dispatch(addTeam(team))
  }
})

var containerCreator = connect(mapStateToProps, mapDispatchToProps)

export const ConferenceItemContainer = containerCreator(ConferenceItemFormat)
export const PollItemContainer = containerCreator(PollItem)

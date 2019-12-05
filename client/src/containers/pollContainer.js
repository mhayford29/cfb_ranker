import { connect } from 'react-redux';
import { handleFetchPoll } from '../actions/polls.js';
import Poll from '../components/Poll.jsx';

var mapStateToProps = (state, ownProps) => ({
  publishedPolls: state.polls,
  id: ownProps.match.params.id
})

var mapDispatchToProps = (dispatch) => ({
  fetchPoll: (id) => {
    dispatch(handleFetchPoll(id))
  }
})

var PollContainer = connect(mapStateToProps, mapDispatchToProps)(Poll)

export default PollContainer;
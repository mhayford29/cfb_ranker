import { connect } from 'react-redux';
import { handleFetchPoll } from '../actions/polls.js';
import PublishedPoll from '../components/PublishedPoll.jsx';

var mapStateToProps = (state, ownProps) => ({
  publishedPolls: state.polls,
  id: ownProps.match.params.id
})

var mapDispatchToProps = (dispatch) => ({
  fetchPoll: (id) => {
    dispatch(handleFetchPoll(id))
  }
})

var PollContainer = connect(mapStateToProps, mapDispatchToProps)(PublishedPoll)

export default PollContainer;
import { connect } from 'react-redux';
import { handleFetchPoll } from '../actions/polls.js';
import Poll from '../components/Poll.jsx';

var mapStateToProps = (state, ownProps) => ({
  poll: state.poll,
  id: ownProps.match.params.id
})

var mapDispatchToProps = (dispatch) => ({
  fetchPoll: (id) => {
    dispatch(handleFetchPoll(id))
  }
})

var PollContainer = connect(mapStateToProps, mapDispatchToProps)(Poll)

export default PollContainer;
import { connect } from 'react-redux';
import Rankings from '../components/Rankings.jsx'

var mapStateToProps = (state) => {
  return{
    rankings: state.myRankings
  }
}

var MyRankingsContainer = connect(mapStateToProps, null)(Rankings)


export default MyRankingsContainer;
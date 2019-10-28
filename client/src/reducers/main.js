import { combineReducers } from 'redux';
import myRankings from './myRankings.js';
import teamInfo from './teamInfo.js';
import poll from './poll.js';
import standings from './standings.js';

var rootReducer = combineReducers({
  myRankings: myRankings,
  teamInfo: teamInfo,
  poll: poll,
  standings: standings
})

export default rootReducer;
import { combineReducers } from 'redux';
import myRankings from './myRankings.js';
import teamInfo from './teamInfo.js';
import polls from './poll.js';
import standings from './standings.js';
import loginModal from './loginModal.js';
import login from './toggleLogin.js'

var rootReducer = combineReducers({
  myRankings: myRankings,
  teamInfo: teamInfo,
  polls: polls,
  standings: standings,
  loginModalisOpen: loginModal,
  loginStatus: login
})

export default rootReducer;
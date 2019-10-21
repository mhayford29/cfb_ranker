import { combineReducers } from 'redux';
import myRankings from './myRankings.js';

var rootReducer = combineReducers({
  myRankings: myRankings
})

export default rootReducer;
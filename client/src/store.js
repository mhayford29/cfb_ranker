import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/main';

export default createStore(rootReducer, { 
  myRankings: [],
  teamInfo: [],
  polls: [],
  standings: {},
  loginModalisOpen: false,
  loginStatus: 'LOGGED_OUT'
}, applyMiddleware(thunk));
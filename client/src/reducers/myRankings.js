import Redux from 'redux';

var myRankingsReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TEAM':
      return state.concat(action.team)
    case 'REMOVE_TEAM':
      return state.filter((val, index) => index !== action.index)
    case 'MOVE_UP':
      var { index } = action;
      var tempRankings = state.slice()
      var tempValue = tempRankings[index - 1];
      tempRankings[index - 1] = tempRankings[index];
      tempRankings[index] = tempValue;
      return tempRankings;
    case 'MOVE_DOWN':
      var { index } = action;
      var tempRankings = state.slice()
      var tempValue = tempRankings[index + 1];
      tempRankings[index + 1] = tempRankings[index];
      tempRankings[index] = tempValue;
      return tempRankings;
    default:
      return state
  }
}

export default myRankingsReducer;
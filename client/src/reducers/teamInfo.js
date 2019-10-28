import Redux from 'redux';

var teamInfoReducer = (state = [], action) => {
  switch(action.type){
    case 'DISPLAY_TEAM':
      return state.concat(action.team)
    default:
      return state
  }
}

export default teamInfoReducer;
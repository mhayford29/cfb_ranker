import Redux from 'redux';

var standingsReducer = (state={}, action) => {
  switch(action.type){
    case 'ADD_STANDINGS':
      return action.standings
    default:
      return state;
  }
}

export default standingsReducer;
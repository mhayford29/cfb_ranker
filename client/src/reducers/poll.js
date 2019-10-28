import Redux from 'redux';

var pollReducer = (state={}, action) => {
  switch(action.type){
    case 'ADD_POLL':
      return action.poll
    default: 
      return state
  }
}

export default pollReducer;
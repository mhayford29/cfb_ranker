import Redux from 'redux';

var pollReducer = (state=[], action) => {
  switch(action.type){
    case 'ADD_POLLS':
      return action.polls
    default: 
      return state
  }
}

export default pollReducer;
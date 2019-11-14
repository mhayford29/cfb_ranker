import redux from 'redux';

var loginReducer = (state='LOGGED_OUT', action) => {
  switch(action.type){
    case 'LOGGED_IN':
      return action.type;
    case 'LOGGED_OUT':
      return action.type;
    default: 
      return state
  }
}

export default loginReducer;
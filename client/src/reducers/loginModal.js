import redux from 'redux';

var loginModalReducer = (state=false, action) => {
  switch(action.type){
    case 'TOGGLE_MODAL':
      return action.flag
    default:
      return state
  }
}

export default loginModalReducer;
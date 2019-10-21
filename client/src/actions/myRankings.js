export function addTeam(team){
  return{
    type: 'ADD_TEAM',
    team
  }
}

export function removeTeam(index){
  return{
    type: 'REMOVE_TEAM',
    index
  }
}

export function moveUp(index){
  return{
    type: 'MOVE_UP',
    index
  }
}

export function moveDown(index){
  return{
    type: 'MOVE_DOWN',
    index
  }
}
import Axios from 'axios';

export function displayTeam(team){
  return{
    type: 'DISPLAY_TEAM',
    team
  }
}

export function handleFetchTeam(query){
  return (dispatch) => {
    Axios
      .get(`/api/team`, { params: { school: query }})
      .then(({ data }) => {
        dispatch(displayTeam(data))
      })
      .catch(err => alert(err))
  }
}
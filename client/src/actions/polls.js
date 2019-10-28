import Axios from 'axios';

export function addPoll(poll){
  return{
    type: 'ADD_POLL',
    poll
  }
}

export function handleFetchPoll(id){
  return (dispatch) => {
    Axios
      .get('https://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings')
      .then(({ data }) => {
        dispatch(addPoll(data.rankings[id]))
      })
      .catch(err => alert(err))
  }
}
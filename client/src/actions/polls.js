import Axios from 'axios';

export function addPoll(polls){
  return{
    type: 'ADD_POLLS',
    polls
  }
}

export function handleFetchPoll(){
  return (dispatch) => {
    Axios
      .get('https://site.api.espn.com/apis/site/v2/sports/football/college-football/rankings')
      .then(({ data }) => {
        dispatch(addPoll(data.rankings))
      })
      .catch(err => alert(err))
  }
}
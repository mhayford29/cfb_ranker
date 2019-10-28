import Axios from 'axios';

export function addStandings(standings){
  return{
    type: 'ADD_STANDINGS',
    standings
  }
}

export function handleFetchStandings(){
  return (dispatch) => {
    Axios
      .get('https://site.api.espn.com/apis/v2/sports/football/college-football/standings')
      .then(({ data }) => {
        dispatch(addStandings(data))
      })
      .catch(err => console.log('error getting standings', err))
  }
}
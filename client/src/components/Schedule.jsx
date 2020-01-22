import React from 'react';

const Schedule = (props) => {
  const { schedule, id } = props;
  schedule.sort((a, b) => {
    return a.week - b.week;
  })
  return(
    <div>
      {schedule.map((game, index) => {
        return game.data.scoringPlays ? <ScheduleItem game={game} id={id}/> : <NotPlayed game={game} id={id}/>
      })} 
    </div>
  )
}

const ScheduleItem = (props) => {
  const { game, id } = props;
  const { homeScore, awayScore } = game.data.scoringPlays[game.data.scoringPlays.length - 1];
  var isHomeTeam = false;
  var win = false;
  if(game.data.boxscore.teams[1].team.id == id){
    isHomeTeam = true;
  }
  if(Math.max(homeScore, awayScore) === homeScore){
    if(game.data.boxscore.teams[1].team.id == id){
      win = true;
    }
  } else{
    if(game.data.boxscore.teams[0].team.id == id){
      win = true;
    }
  }
  return(
    <div className="prev-game-item-container">
      {isHomeTeam 
        ? <div>{game.data.boxscore.teams[0].team.location} <img src={game.data.boxscore.teams[0].team.logo} height={25} width={25}/></div> 
        : <div>@ {game.data.boxscore.teams[1].team.location} <img src={game.data.boxscore.teams[1].team.logo} height={25} width={25}/></div>}
      <div>
        <span>{awayScore}-{homeScore} </span>
        {win ? <span style={{ color: 'green' }}>W</span> : <span style={{ color: 'red' }}>L</span>}
      </div>
    </div>
  )
}

const NotPlayed = (props) => {
  const { game: { data: { boxscore: { teams } }} } = props;
  const { game: { data: { header: {competitions }}}} = props;
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var gameDate = new Date(competitions[0].date)
  var gameDateStr = gameDate.toLocaleDateString("en-US", options)
  return(
    <div>
      {gameDateStr} {teams[0].team.location} vs. {teams[1].team.location}
    </div>
  )
}

export default Schedule;
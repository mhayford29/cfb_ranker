const axios = require('axios');
const model = require('./database/models')


const teamAbvs = ['UCF', 'Cincinnati', 'East Carolina', 'Houston', 'Memphis', 'Navy', 'USF', 'SMU', 'Temple', 'Tulane', 'Tulsa',
                  'Boston College', 'Clemson', 'Duke', 'Florida State', 'Georgia Tech', 'Louisville', 'Miami', 'North Carolina', 'NC State', 'Pittsburgh', 'Syracuse', 'Virginia', 'Virginia Tech', 'Wake Forest',
                  'Illinois', 'Indiana', 'Iowa', 'Maryland', 'Michigan', 'Mich. St.', 'Minnesota', 'Nebraska', 'Northwestern', 'Ohio State', 'Penn State', 'Purdue', 'Rutgers', 'Wisconsin',
                  'Baylor', 'Iowa State', 'Kansas', 'Kansas State', 'Oklahoma', 'Oklahoma State', 'TCU', 'Texas', 'Texas Tech', 'West Virginia',
                  'UAB', 'FAU', 'Florida Intl', 'LA Tech', 'Marshall', 'Mid Tennessee', 'Charlotte', 'North Texas', 'Old Dominion', 'Rice', 'Southern Miss', 'UTEP', 'UTSA', 'W Kentucky',
                  'Army', 'BYU', 'UConn', 'Liberty', 'New Mexico St', 'Notre Dame', 
                  'Akron', 'Ball State', 'Bowling Green', 'Buffalo', 'Cent Michigan', 'E Michigan', 'Kent State', 'Miami (OH)', 'N Illinois', 'Ohio', 'Toledo', 'W Michigan',
                  'Air Force', 'Boise State', 'Colorado State', 'Fresno State', `Hawai'i`, 'Nevada', 'UNLV', 'New Mexico', 'San Diego State', 'San Jose State', 'Utah State', 'Wyoming',
                  'Arizona', 'Arizona State', 'Cal', 'Colorado', 'Oregon', 'Oregon St', 'Stanford', 'UCLA', 'USC', 'Utah', 'Washington', 'Washington St',
                  'Alabama', 'Arkansas', 'Auburn', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'Ole Miss', 'Miss St', 'Missouri', 'S Carolina', 'Tennessee', 'Texas A&M', 'Vanderbilt',
                  'Arkansas State', 'C. Carolina', 'Ga Southern', 'Georgia State', 'Louisiana', 'UL Monroe', 'South Alabama', 'Texas State', 'Troy'];

async function updateGames(){

}

async function popLastGameId(){
  for(const school of teamAbvs){
    model.GameIds.updateOne({ school: school }, { $pop: { gameIds: 1 }})
    .then(() => console.log(`successfully removed ${school}'s most recent gameId`))
    .catch(err => console.log('error removing last gameId'))
  }
}

async function fetchGameData(){
  var idMemo = {};
  var idArr = [];
  try{
    for(var school of teamAbvs){
      let { data } = await axios.get(`http://localhost:3000/api/team`, { params: { school: school }})
      //console.log(data[0].school)
      for(var i = 0; i < data[0].gameIds.length; i++){
        if(!idMemo[data[0].gameIds[i]]){
          idMemo[data[0].gameIds[i]] = true;
          idArr.push(data[0].gameIds[i]);
        }
      }
    }
  } catch(err){
    console.log(`error`)
  }
  try{
    for(var id of idArr){
      let result = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=${id}`)
      //console.log(`${result.data.boxscore.teams[0].team.location} VS ${result.data.boxscore.teams[1].team.location}`);
      model.GameData.create({
        id: id,
        week: result.data.header.week,
        data: result.data,
      })
      .then(() => console.log(`successfully inserted game data for game id: ${id} week ${result.data.header.week} ${result.data.boxscore.teams[0].team.location} VS ${result.data.boxscore.teams[1].team.location}`))
      .catch(err => console.log(`error creating document`))
    }
  } catch(err){
    console.log(`error`)
  }
}

async function deleteGameData(){
  model.GameData.deleteMany({
    week: { $gte: 8 }
  })
  .then(() => console.log('deleted games'))
  .catch(err => console.log('error'))
}

async function updateGameData(){
  model.GameData.find({
    week: 7
  })
  .then(async games => {
    try{
      for(var game of games){
        let result = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=${game.id}`)
        model.GameData.update({ id: game.id }, {
          data: result.data
        })
        .then(() => console.log(`successful update`))
        .catch(err => console.log('error updating game data'))
      }
    }catch(err){
      console.log('error')
    }
  })
  .catch(err => console.log(err))
}

deleteGameData();
//popLastGameId();
//fetchGameData();
//updateGameData();
//getRecentGame();
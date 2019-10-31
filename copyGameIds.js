const axios = require('axios');
const async = require('async');
const { teamAbvs, teamFullNames } = require('./lib/teamAbvs');
const { GameData, GameIds } = require('./database/models');

var deleteGameIds = async () => {
  for(const school of teamFullNames){
    GameIds.updateOne({ school: school }, {
      gameIds: []
    })
    .then(() => console.log(`deleted ${school}'s game IDs`))
    .catch(err => console.log(`error deleting ${school}'s game IDs`))
  }
}

var copyGameIds = async () => {
  try{
    for(const school of teamAbvs){
      let gameIds = [];
      let { data: { events, team: { id } } } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}/schedule`)
      for(var i = 0; i < events.length; i++){
        gameIds.push(`${events[i].id}`)
      }
      console.log(`${school} - ${gameIds}`)
      GameIds.updateOne({ schoolId: id }, { $push: { gameIds: { $each: gameIds }}})
        .then(() => console.log(`successfully updated ${school}'s game IDs`))
        .catch(err => console.log(`error updating ${school}'s game IDs`))
    }
  } catch(err){
    console.log(err)
  }
}

//deleteGameIds();
//async.retry(2, copyGameIds);
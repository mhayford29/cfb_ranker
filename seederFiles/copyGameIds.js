const axios = require('axios');
const async = require('async');
const { teamAbvs, teamFullNames, teamIds } = require('../lib/teamAbvs');
const { GameData, GameIds } = require('../database/models');

var deleteGameIds = async () => {
  for(const id of teamIds){
    GameIds.updateOne({ schoolId: id }, {
      gameIds: []
    })
    .then(() => console.log(`deleted ${id}'s game IDs`))
    .catch(err => console.log(`error deleting ${id}'s game IDs`))
  }
}

var copyGameIds = async () => {
  try{
    for(const teamId of teamIds){
      let gameIds = [];
      let { data: { events, team: { id } } } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${teamId}/schedule`)
      for(var i = 0; i < events.length; i++){
        gameIds.push(`${events[i].id}`)
      }
      console.log(`${teamId} - ${gameIds}`)
      GameIds.updateOne({ schoolId: id }, { $push: { gameIds: { $each: gameIds }}})
        .then(() => console.log(`successfully updated ${teamId}'s game IDs`))
        .catch(err => console.log(`error updating ${teamId}'s game IDs`))
    }
  } catch(err){
    console.log(err)
  }
}

//deleteGameIds();
async.retry(2, copyGameIds);
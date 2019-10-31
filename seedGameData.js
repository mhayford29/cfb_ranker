const axios = require('axios');
const async = require('async');
const { teamAbvs, teamFullNames } = require('./lib/teamAbvs.js');
const { GameData, GameIds } = require('./database/models');

var deleteAllGames = () => {
  GameData.deleteMany()
    .then(() => console.log('successfully deleted all games'))
    .catch(err => console.log('error deleting all games'))
}

var updateStats = async () => {
  try{
    for(const school of teamAbvs){
      let { data: { team } } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`)
      GameIds.updateOne({schoolId: team.id }, {
        stats: team.record.items[0].stats
      })
      .then(() => console.log(`${team.location} updated successfully`))
      .catch(err => {
        console.log(err);
        process.exit();
      })
    }
  } catch (err){
    console.log('error')
  }
}

var seedGameData = async () => {
  var idMemo = {};
  try{
    for(const school of teamFullNames){
      let { data } = await axios.get(`http://localhost:3000/api/team`, {params: { school: school }})
      for(const id of data[0].gameIds){
        if(!idMemo[id]){
          idMemo[id] = true;
          let result = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=${id}`)
          try{
            await GameData.create({
              id: id,
              week: result.data.header.week,
              data: result.data
            })
            console.log(`success in creating week ${result.data.header.week} data for ${school}`)
          } catch(err){
            console.log('error with model.create')
          }
          // .then(() => console.log(`success in creating week ${result.data.header.week} data for ${school}`))
          // .catch(err => {
          //   console.log(err);
          //   process.exit()
          //})
        }
      }
    }
  } catch(err) {
    console.log(err)
  }
}

//updateStats();
//deleteAllGames();
async.retry(2, seedGameData)
const axios = require('axios');
const model = require('./database/models')

const teamAbvs = ['ucf', 'cincinnati', 'ecu', 'houston', 'memphis', 'navy', 'usf', 'smu', 'temple', 'tulane', 'tulsa',
                  'bc', 'clemson', 'duke', 'fsu', 'gt', 'louisville', 'miami', 'unc', 'ncst', 'pitt', 'syracuse', 'virginia', 'vt', 'wakeforest',
                  'illinois', 'indiana', 'iowa', 'maryland', 'michigan', 'msu', 'minnesota', 'nebraska', 'nw', 'ohiost', 'pennst', 'purdue', 'rutgers', 'wisconsin',
                  'baylor', 'iowast', 'kansas', 'ksu', 'oklahoma', 'okst', 'tcu', 'texas', 'ttu', 'wvu',
                  'uab', 'fau', 'fiu', 'latech', 'marshall', 'middletenn', 'charlotte', 'northtexas', 'odu', 'rice', 'usm', 'utep', 'utsa', 'wku',
                  'army', 'byu', 'uconn', 'liberty', 'nmsu', 'notredame',
                  'akron', 'ball', 'bgsu', 'buffalo', 'cmu', 'emu', 'kent', 'miamioh', 'niu', 'ohio', 'toledo', 'wmu',
                  'afa', 'boisest', 'csu', 'fresnost', 'hawaii', 'nevada', 'unlv', 'unm', 'sandiegost', 'sjsu', 'usu', 'wyoming',
                  'arizona', 'asu', 'california', 'colorado', 'oregon', 'oregonst', 'stanford', 'ucla', 'usc', 'utah', 'washington', 'wsu',
                  'alabama', 'arkansas', 'auburn', 'florida', 'georgia', 'kentucky', 'lsu', 'olemiss', 'msst', 'missouri', 'socarolina', 'tennessee', 'ta&m', 'vanderbilt',
                  'arkst', 'ccu', 'gaso', 'georgiast', 'ull', 'ulm', 'usa', 'txst', 'troy'];

async function getFirstID() {
  for(const school of teamAbvs){
    try {
      let { data } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`);
      const nextGameID = data.team.nextEvent[0].id;
      const schoolId = data.team.id;
      let results = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=${nextGameID}`);
      for(var i = 0; i < results.data.lastFiveGames.length; i++){
        if(results.data.lastFiveGames[i].team.id === schoolId){
          model.updateOne({ school: data.team.nickname }, { $push: { gameIds: results.data.lastFiveGames[i].events[4].id }})
               .then(() => console.log(`successfully updated ${results.data.team.nickname}`))
               .catch(err => console.log(`error updating ${results.data.team.nickname}`))
        }
      }
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
}

async function updateID() {
  for(const school of teamAbvs){
    try {
      const { data } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`);
      model.updateOne({ school: data.team.nickname }, { $push: { gameIds: data.team.nextEvent[0].id }})
           .then(() => console.log(`successfully updated ${data.team.nickname}`))
           .catch(err => console.log(`error updating ${data.team.nickname}`))
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
}

async function setCollection() {
  for(const school of teamAbvs){
    try {
      const { data } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`);
      model.create({ 
        school: data.team.nickname,
        schoolId: data.team.id,
        gameIds: []
      })
      .then(() => console.log(`successfully updated ${data.team.nickname}`))
      .catch(err => console.log(`error updating ${data.team.nickname}`))
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
}

//setCollection();
//getFirstID();
updateID();
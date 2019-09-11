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
          model.GameIds.updateOne({ school: data.team.nickname }, { $push: { gameIds: results.data.lastFiveGames[i].events[4].id }})
               .then(() => console.log(`successfully updated ${results.data.team.nickname}`))
               .catch(err => console.log(`error updating ${results.data.team.nickname}`))
        }
      }
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
}

async function getNextID() {
  for(const school of teamAbvs){
    try {
      let { data } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`);
      const nextEvent = data.team.nextEvent[0].id;
      const team = data.team.nickname;
      let results = await axios.get(`http://localhost:3000/api/team`, { params: { school: team }});
      let ids = results.data[0].gameIds
      if(ids[ids.length - 1] !== nextEvent){
        model.GameIds.updateOne({ school: team }, { $push: { gameIds: nextEvent }})
          .then(() => console.log(`successfully updated ${team}'s gameIds`))
          .catch(err => console.log(`error updating ${team}'s gameIds`))
      } else{
        console.log(`${team} is already up to date`)
      }
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
  process.exit();
}

async function scrapeTeamStats() {
  for(const school of teamAbvs){
    try {
      const { data } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`);
      model.GameIds.updateOne({ school: data.team.nickname }, { stats: [] })
           .then(() => 
            model.GameIds.updateOne({ school: data.team.nickname }, 
                  { $push: { stats: { $each: [
                    { name: data.team.record.items[0].stats[0].name, value: data.team.record.items[0].stats[0].value },
                    { name: data.team.record.items[0].stats[1].name, value: data.team.record.items[0].stats[1].value },
                    { name: data.team.record.items[0].stats[2].name, value: data.team.record.items[0].stats[2].value },
                    { name: data.team.record.items[0].stats[3].name, value: data.team.record.items[0].stats[3].value },
                    { name: data.team.record.items[0].stats[4].name, value: data.team.record.items[0].stats[4].value },
                    { name: data.team.record.items[0].stats[5].name, value: data.team.record.items[0].stats[5].value },
                    { name: data.team.record.items[0].stats[6].name, value: data.team.record.items[0].stats[6].value },
                    { name: data.team.record.items[0].stats[7].name, value: data.team.record.items[0].stats[7].value },
                    { name: data.team.record.items[0].stats[8].name, value: data.team.record.items[0].stats[8].value },
                    { name: data.team.record.items[0].stats[9].name, value: data.team.record.items[0].stats[9].value },
                    { name: data.team.record.items[0].stats[10].name, value: data.team.record.items[0].stats[10].value },
                    { name: data.team.record.items[0].stats[11].name, value: data.team.record.items[0].stats[11].value },
                    { name: data.team.record.items[0].stats[12].name, value: data.team.record.items[0].stats[12].value },
                    { name: data.team.record.items[0].stats[13].name, value: data.team.record.items[0].stats[13].value },
                    { name: data.team.record.items[0].stats[14].name, value: data.team.record.items[0].stats[14].value },
                    { name: data.team.record.items[0].stats[15].name, value: data.team.record.items[0].stats[15].value },
                    { name: data.team.record.items[0].stats[17].name, value: data.team.record.items[0].stats[17].value },
                    { name: data.team.record.items[0].stats[18].name, value: data.team.record.items[0].stats[18].value },
                    { name: data.team.record.items[0].stats[19].name, value: data.team.record.items[0].stats[19].value },
                    { name: data.team.record.items[0].stats[20].name, value: data.team.record.items[0].stats[20].value },
                    { name: data.team.record.items[0].stats[21].name, value: data.team.record.items[0].stats[21].value },
                    { name: data.team.record.items[0].stats[22].name, value: data.team.record.items[0].stats[22].value },
                  ]}}}))
                .then(() => console.log(`successfully updated ${data.team.nickname}'s stats`))
                .catch(err => console.log(`error updating ${data.team.nickname}`))
           .catch(err => console.log(`error`))
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
  process.exit();
}

async function setCollection() {
  for(const school of teamAbvs){
    try {
      const { data } = await axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/college-football/teams/${school}`);
      model.GameIds.updateMany({ school: data.team.nickname },
        { logos: [] }
      )
      .then(() => console.log(`successfully updated ${data.team.nickname}`))
      .catch(err => console.log(`error updating ${data.team.nickname}`))
    } catch (error) {
      console.error(`error updating ${school}`);
    }
  }
}

async function setStandigns() {
  
}

getNextID();
//scrapeTeamStats();
//setCollection();
//getFirstID();
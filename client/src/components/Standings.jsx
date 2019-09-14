import React from 'react';

const Standings = (props) => {
  console.log(props.standings)
  return(
    <div style={{ marginBottom: '50px' }}>
      {props.standings.children.map((conf, index) => {
        return <Conference conf={conf} addToRankings={props.addToRankings}/>
      })}
    </div>
  )
}

const Conference = (props) => {
  return(
    <div>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>{props.conf.name}</div>
      <div className="conference-item-header">
        <div></div>
        <div>W-L</div>
        <div>PF</div>
        <div>PA</div>
        <div>Home</div>
        <div>Away</div>
        <div>STRK</div>
      </div>
      {props.conf.standings ? 
        props.conf.standings.entries.map((item, index) => {
          return <ConferenceItem 
                   item={item} 
                   index={index} 
                   addToRankings={props.addToRankings}/> 
        }) :
        props.conf.children.map((division, index) => {
          return <Division 
                   division={division} 
                   index={index}
                   addToRankings={props.addToRankings}/>
        })
      }
    </div>
  )
}

const Division = (props) => {
  var tempArr = props.division.shortName.split(' ');
  var division = tempArr[tempArr.length - 1]
  if(props.index === 1){
    var styles = {
      fontSize: '25px',
      fontWeight: 'bold',
      marginTop: '30px'
    }
  } else{
    var styles = {
      fontSize: '25px',
      fontWeight: 'bold'
    }
  }
  return(
    <div style={styles}>
      <div>{division}</div>
      {props.division.standings.entries.map((item, index) => {
        return <ConferenceItem 
                 item={item} 
                 index={index}
                 addToRankings={props.addToRankings}/>
      })}
    </div>
  )
}

const ConferenceItem = (props) => {
  console.log(props.item);
  if(props.index % 2 === 0){
    return(
      <div className="light-grey-row">
        <ConferenceItemFormat item={props.item} index={props.index} addToRankings={props.addToRankings}/>
      </div>
    )
  } else{
    return(
      <div className="dark-grey-row">
        <ConferenceItemFormat item={props.item} index={props.index} addToRankings={props.addToRankings}/>
      </div>
    )
  }
}

const ConferenceItemFormat = (props) => {
  var teamInfo = {
    school: props.item.team.location,
    record: props.item.stats[11].summary,
    logo: props.item.team.logos[0].href
  }
  return(
    <div className="conference-item-container">
      <div style={{ textAlign: 'left' }}>{props.index + 1}. {props.item.team.location} <img src={props.item.team.logos[0].href} className="thumbnail"></img></div>
      <div className="conference-item-rank-button" onClick={() => props.addToRankings(teamInfo)}><span>Rank</span></div>
      <div className="conference-item-stat">{props.item.stats[11].summary}</div>
      <div className="conference-item-stat">{props.item.stats[3].value}</div>
      <div className="conference-item-stat">{props.item.stats[4].value}</div>
      <div className="conference-item-stat">{props.item.stats[23].summary}</div>
      <div className="conference-item-stat">{props.item.stats[35].summary}</div>
      <div className="conference-item-stat">{props.item.stats[5].displayValue}</div>
    </div>
  )
}

export default Standings;
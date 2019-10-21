import React from 'react';

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

export default ConferenceItemFormat;
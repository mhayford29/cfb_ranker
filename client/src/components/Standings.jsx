import React from 'react';
import { ConferenceItemContainer } from '../containers/conferenceItemContainer.js';

class Standings extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchStandings()
  }

  render(){
    if(this.props.standings.children){
      return(
        <div style={{ marginBottom: '50px' }}>
          {this.props.standings.children.map((conf, index) => {
            return <Conference conf={conf} addToRankings={this.props.addToRankings}/>
          })}
        </div>
      )
    } else{
      return(
        <div className="lds-dual-ring"></div>
      )
    }
  }
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
  if(props.index % 2 === 0){
    return(
      <div className="light-grey-row">
        <ConferenceItemContainer item={props.item} index={props.index} />
      </div>
    )
  } else{
    return(
      <div className="dark-grey-row">
        <ConferenceItemContainer item={props.item} index={props.index} />
      </div>
    )
  }
}

export default Standings;

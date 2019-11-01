import React from 'react';
import Schedule from './Schedule.jsx';
import TeamSelectModal from './Modal.jsx';

var TeamInfoItem = (props) => {
  const { team } = props;
  var teamInfo = {
    school: team.school,
    record: `${team.stats[1].value}-${team.stats[2].value}`,
    logo: team.logos[0]
  }
  return(
    <div>
      <div className="team-header-container">
        <span width={200} height={200}>
          <img src={team.logos[0]} width={200} height={200}></img>
        </span>
        <span style={{ fontSize: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {team.location} {team.name}
        </span>
        <div 
          className="add-to-rankings" 
          style={{ color: `#${team.color}`, borderColor: `#${team.alternateColor}` }}
          onClick={() => props.addToRankings(teamInfo)}>
          <span>Add To Rankings</span>
        </div>
      </div>
      <div className="team-stats">
        <div className="team-stats-container">
          <div>
            <div>
              Record: {team.stats[1].value} - {team.stats[2].value} 
            </div>
            <div>
              Streak: {team.stats[15].value}
            </div>
          </div>
          <div>
            <div>
              Points For and Against: {team.stats[9].value} - {team.stats[10].value}
            </div>
            <div>
              Point Differential: {team.stats[14].value}
            </div>
          </div>
        </div>
        <div style={{ fontSize: '40px' }}>Schedule</div>
        <Schedule schedule={team.game_data} id={team.schoolId}/>
        <div>
          <button onClick={props.openModal}>+ Compare Team</button>
        </div>
      </div>
      <TeamSelectModal 
        closeModal={props.closeModal}
        afterOpenModal={props.afterOpenModal}
        modalIsOpen={props.modalIsOpen}
        fetchTeam={props.fetchTeam}/>
    </div>
  )
}

export default TeamInfoItem;
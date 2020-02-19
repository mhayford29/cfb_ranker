import React from 'react';
import Schedule from './Schedule.jsx';
import TeamSelectModal from './Modal.jsx';

var TeamInfoItem = (props) => {
  const { game_data, schoolData } = props.team;
  //console.log(game_data, schoolData)
  var teamInfo = {
    school: schoolData.school,
    record: `${schoolData.stats[1].value}-${schoolData.stats[2].value}`,
    logo: schoolData.logos[0]
  }
  return(
    <div className="team-info-item">
      <div className="team-header-container">
        <span width={120} height={120}>
          <img src={schoolData.logos[0]} width={120} height={120}></img>
        </span>
        <span style={{ fontSize: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {schoolData.location} {schoolData.name}
        </span>
      </div>
      <div className="team-stats">
        <div className="second-row-container">
          <div className="team-stats-container">
            <div>
              <div>
                Record: {schoolData.stats[1].value} - {schoolData.stats[2].value} 
              </div>
              <div>
                Streak: {schoolData.stats[15].value}
              </div>
            </div>
            <div>
              <div>
                Points For and Against: {schoolData.stats[9].value} - {schoolData.stats[10].value}
              </div>
              <div>
                Point Differential: {schoolData.stats[14].value}
              </div>
            </div>
          </div>
          <div style={{ marginLeft: '25%', marginTop: 'auto', marginBottom: 'auto'}}>
            <div
              className="add-to-rankings" 
              style={{ color: `#${schoolData.color}`, borderColor: `#${schoolData.alternateColor}` }}
              onClick={() => props.addToRankings(teamInfo)}>
              <span>Add To<br></br> Rankings</span>
            </div>
          </div>
        </div>
        <div style={{ fontSize: '35px', textAlign: 'center', marginTop: '10px' }}>Schedule</div>
        <Schedule schedule={game_data} id={schoolData.schoolId}/>
        <div>
          <div className="compare-team-button" style={{ background: `#${schoolData.color}`}} onClick={props.openModal}>+ Compare Team</div>
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
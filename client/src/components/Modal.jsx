import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    position              : 'fixed',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : -1
  }
};

Modal.setAppElement('#app');

const TeamSelectModal = (props) => {
  const { fetchTeam } = props;
  return(
    <div>
      <Modal
          isOpen={props.modalIsOpen}
          //onAfterOpen={props.afterOpenModal}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-container">
            <div className="modal-column">
              <div className="modal-header">American</div>
                <div onClick={() => fetchTeam('UCF')}>Central Florida</div>
                <div onClick={() => fetchTeam('Cincinnati')}>Cincinnati</div>
                <div onClick={() => fetchTeam('East Carolina')}>East Carolina</div>
                <div onClick={() => fetchTeam('Houston', 3)}>Houston</div>
                <div onClick={() => fetchTeam('Memphis', 4)}>Memphis</div>
                <div onClick={() => fetchTeam('Navy', 5)}>Navy</div>
                <div onClick={() => fetchTeam('USF', 7)}>South Florida</div>
                <div onClick={() => fetchTeam('SMU', 6)}>Southern Methodist</div>
                <div onClick={() => fetchTeam('Temple', 8)}>Temple</div>
                <div onClick={() => fetchTeam('Tulane', 9)}>Tulane</div>
                <div onClick={() => fetchTeam('Tulsa', 10)}>Tulsa</div>
            </div>
            <div className="modal-column">
              <div className="modal-header">ACC</div>
                <div onClick={() => fetchTeam('Boston College')}>Boston College</div>
                <div onClick={() => fetchTeam('Clemson')}>Clemson</div>
                <div onClick={() => fetchTeam('Duke')}>Duke</div>
                <div onClick={() => fetchTeam('Florida State')}>Florida State</div>
                <div onClick={() => fetchTeam('Georgia Tech')}>Georgia Tech</div>
                <div onClick={() => fetchTeam('Louisville')}>Louisville</div>
                <div onClick={() => fetchTeam('Miami')}>Miami</div>
                <div onClick={() => fetchTeam('North Carolina')}>North Carolina</div>
                <div onClick={() => fetchTeam('NC State')}>North Carolina State</div>
                <div onClick={() => fetchTeam('Pittsburgh')}>Pitt</div>
                <div onClick={() => fetchTeam('Syracuse')}>Syracuse</div>
                <div onClick={() => fetchTeam('Virginia')}>Virginia</div>
                <div onClick={() => fetchTeam('Virginia Tech')}>Virginia Tech</div>
                <div onClick={() => fetchTeam('Wake Forest')}>Wake Forest</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">B1G</div>
                <div onClick={() => fetchTeam('Illinois')}>Illinois</div>
                <div onClick={() => fetchTeam('Indiana')}>Indiana</div>
                <div onClick={() => fetchTeam('Iowa')}>Iowa</div>
                <div onClick={() => fetchTeam('Maryland')}>Maryland</div>
                <div onClick={() => fetchTeam('Michigan')}>Michigan</div>
                <div onClick={() => fetchTeam('Mich. St.')}>Michigan State</div>
                <div onClick={() => fetchTeam('Minnesota')}>Minnesota</div>
                <div onClick={() => fetchTeam('Nebraska')}>Nebraska</div>
                <div onClick={() => fetchTeam('Northwestern')}>Northwestern</div>
                <div onClick={() => fetchTeam('Ohio State')}>Ohio State</div>
                <div onClick={() => fetchTeam('Penn State')}>Penn State</div>
                <div onClick={() => fetchTeam('Purdue')}>Purdue</div>
                <div onClick={() => fetchTeam('Rutgers')}>Rutgers</div>
                <div onClick={() => fetchTeam('Wisconsin')}>Wisconsin</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Big 12</div>
                <div onClick={() => fetchTeam('Baylor', 0)}>Baylor</div>
                <div onClick={() => fetchTeam('Iowa State', 1)}>Iowa State</div>
                <div onClick={() => fetchTeam('Kansas', 2)}>Kansas</div>
                <div onClick={() => fetchTeam('Kansas State', 3)}>Kansas State</div>
                <div onClick={() => fetchTeam('Oklahoma', 4)}>Oklahoma</div>
                <div onClick={() => fetchTeam('Oklahoma State', 5)}>Oklahoma State</div>
                <div onClick={() => fetchTeam('TCU', 6)}>TCU</div>
                <div onClick={() => fetchTeam('Texas', 7)}>Texas</div>
                <div onClick={() => fetchTeam('Texas Tech', 8)}>Texas Tech</div>
                <div onClick={() => fetchTeam('West Virginia', 9)}>West Virginia</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">C-USA</div>
                <div onClick={() => fetchTeam('UAB', 10)}>Alabama Birmingham</div>
                <div onClick={() => fetchTeam('FAU', 1)}>Florida Atlantic</div>
                <div onClick={() => fetchTeam('Florida Intl', 2)}>Florida International</div>
                <div onClick={() => fetchTeam('LA Tech', 3)}>Louisiana Tech</div>
                <div onClick={() => fetchTeam('Marshall', 4)}>Marshall</div>
                <div onClick={() => fetchTeam('Mid Tennessee', 5)}>Middle Tennessee</div>
                <div onClick={() => fetchTeam('Charlotte', 0)}>North Carolina Charlotte</div>
                <div onClick={() => fetchTeam('North Texas', 6)}>North Texas</div>
                <div onClick={() => fetchTeam('Old Dominion', 7)}>Old Dominion</div>
                <div onClick={() => fetchTeam('Rice', 8)}>Rice</div>
                <div onClick={() => fetchTeam('Southern Miss', 9)}>Southern Miss</div>
                <div onClick={() => fetchTeam('UTEP', 11)}>Texas El Paso</div>
                <div onClick={() => fetchTeam('UTSA', 12)}>Texas San Antonio</div>
                <div onClick={() => fetchTeam('W Kentucky', 13)}>Western Kentucky</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Independents</div>
                <div onClick={() => fetchTeam('Army', 0)}>Army</div>
                <div onClick={() => fetchTeam('BYU', 1)}>BYU</div>
                <div onClick={() => fetchTeam('UConn', 1)}>Connecticut</div>
                <div onClick={() => fetchTeam('Liberty', 2)}>Liberty</div>
                <div onClick={() => fetchTeam('New Mexico St', 3)}>New Mexico State</div>
                <div onClick={() => fetchTeam('Notre Dame', 4)}>Notre Dame</div>
                <div>Massachusetts</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MAC</div>
                <div onClick={() => fetchTeam('Akron', 0)}>Akron</div>
                <div onClick={() => fetchTeam('Ball State', 1)}>Ball State</div>
                <div onClick={() => fetchTeam('Bowling Green', 2)}>Bowling Green</div>
                <div onClick={() => fetchTeam('Buffalo', 3)}>Buffalo</div>
                <div onClick={() => fetchTeam('Cent Michigan', 4)}>Central Michigan</div>
                <div onClick={() => fetchTeam('E Michigan', 5)}>Eastern Michigan</div>
                <div onClick={() => fetchTeam('Kent State', 6)}>Kent State</div>
                <div onClick={() => fetchTeam('Miami (OH)', 7)}>Miami University</div>
                <div onClick={() => fetchTeam('N Illinois', 8)}>Northern Illinois</div>
                <div onClick={() => fetchTeam('Ohio', 9)}>Ohio University</div>
                <div onClick={() => fetchTeam('Toledo', 10)}>Toledo</div>
                <div onClick={() => fetchTeam('W Michigan', 11)}>Western Michigan</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MWC</div>
                <div onClick={() => fetchTeam('Air Force', 0)}>Air Force</div>
                <div onClick={() => fetchTeam('Boise State', 1)}>Boise State</div>
                <div onClick={() => fetchTeam('Colorado State', 2)}>Colorado State</div>
                <div onClick={() => fetchTeam('Fresno State', 3)}>Fresno State</div>
                <div onClick={() => fetchTeam(`Hawai'i`, 4)}>Hawaii</div>
                <div onClick={() => fetchTeam('Nevada', 5)}>Nevada</div>
                <div onClick={() => fetchTeam('UNLV', 9)}>Nevada Las Vegas</div>
                <div onClick={() => fetchTeam('New Mexico', 6)}>New Mexico</div>
                <div onClick={() => fetchTeam('San Diego State', 7)}>San Diego State</div>
                <div onClick={() => fetchTeam('San Jose State', 8)}>San Jose State</div>
                <div onClick={() => fetchTeam('Utah State', 10)}>Utah State</div>
                <div onClick={() => fetchTeam('Wyoming', 11)}>Wyoming</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Pac 12</div>
                <div onClick={() => fetchTeam('Arizona', 0)}>Arizona</div>
                <div onClick={() => fetchTeam('Arizona State', 1)}>Arizona State</div>
                <div onClick={() => fetchTeam('Cal')}>California</div>
                <div onClick={() => fetchTeam('Colorado', 3)}>Colorado</div>
                <div onClick={() => fetchTeam('Oregon', 4)}>Oregon</div>
                <div onClick={() => fetchTeam('Oregon St', 5)}>Oregon State</div>
                <div onClick={() => fetchTeam('Stanford', 6)}>Stanford</div>
                <div onClick={() => fetchTeam('UCLA', 7)}>UCLA</div>
                <div onClick={() => fetchTeam('USC', 8)}>USC</div>
                <div onClick={() => fetchTeam('Utah', 9)}>Utah</div>
                <div onClick={() => fetchTeam('Washington', 10)}>Washington</div>
                <div onClick={() => fetchTeam('Washington St', 11)}>Washington State</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">SEC</div>
                <div onClick={() => fetchTeam('Alabama')}>Alabama</div>
                <div onClick={() => fetchTeam('Arkansas')}>Arkansas</div>
                <div onClick={() => fetchTeam('Auburn', 2)}>Auburn</div>
                <div onClick={() => fetchTeam('Florida', 3)}>Florida</div>
                <div onClick={() => fetchTeam('Georgia', 4)}>Georgia</div>
                <div onClick={() => fetchTeam('Kentucky', 5)}>Kentucky</div>
                <div onClick={() => fetchTeam('LSU', 6)}>LSU</div>
                <div onClick={() => fetchTeam('Ole Miss', 9)}>Ole Miss</div>
                <div onClick={() => fetchTeam('Miss St', 7)}>Mississippi State</div>
                <div onClick={() => fetchTeam('Missouri', 8)}>Missouri</div>
                <div onClick={() => fetchTeam('S Carolina', 10)}>South Carolina</div>
                <div onClick={() => fetchTeam('Tennessee', 11)}>Tennessee</div>
                <div onClick={() => fetchTeam('Texas A&M', 12)}>Texas A&M</div>
                <div onClick={() => fetchTeam('Vanderbilt', 13)}>Vanderbilt</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Sun Belt</div>
                <div>Appalachian State</div>
                <div onClick={() => fetchTeam('Arkansas State', 1)}>Arkansas State</div>
                <div onClick={() => fetchTeam('C. Carolina', 2)}>Coastal Carolina</div>
                <div onClick={() => fetchTeam('Ga Southern', 3)}>Georgia Southern</div>
                <div onClick={() => fetchTeam('Georgia State', 4)}>Georgia State</div>
                <div onClick={() => fetchTeam('Louisiana', 5)}>Louisiana Lafayette</div>
                <div onClick={() => fetchTeam('UL Monroe', 6)}>Louisiana Monroe</div>
                <div onClick={() => fetchTeam('South Alabama', 7)}>South Alabama</div>
                <div onClick={() => fetchTeam('Texas State', 8)}>Texas State</div>
                <div onClick={() => fetchTeam('Troy', 9)}>Troy</div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default TeamSelectModal;
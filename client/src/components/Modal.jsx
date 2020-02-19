import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
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
                <div onClick={() => fetchTeam('Houston')}>Houston</div>
                <div onClick={() => fetchTeam('Memphis')}>Memphis</div>
                <div onClick={() => fetchTeam('Navy')}>Navy</div>
                <div onClick={() => fetchTeam('USF')}>South Florida</div>
                <div onClick={() => fetchTeam('SMU')}>Southern Methodist</div>
                <div onClick={() => fetchTeam('Temple')}>Temple</div>
                <div onClick={() => fetchTeam('Tulane')}>Tulane</div>
                <div onClick={() => fetchTeam('Tulsa')}>Tulsa</div>
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
                <div onClick={() => fetchTeam('Baylor')}>Baylor</div>
                <div onClick={() => fetchTeam('Iowa State')}>Iowa State</div>
                <div onClick={() => fetchTeam('Kansas')}>Kansas</div>
                <div onClick={() => fetchTeam('Kansas State')}>Kansas State</div>
                <div onClick={() => fetchTeam('Oklahoma')}>Oklahoma</div>
                <div onClick={() => fetchTeam('Oklahoma State')}>Oklahoma State</div>
                <div onClick={() => fetchTeam('TCU')}>TCU</div>
                <div onClick={() => fetchTeam('Texas')}>Texas</div>
                <div onClick={() => fetchTeam('Texas Tech')}>Texas Tech</div>
                <div onClick={() => fetchTeam('West Virginia')}>West Virginia</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">C-USA</div>
                <div onClick={() => fetchTeam('UAB')}>Alabama Birmingham</div>
                <div onClick={() => fetchTeam('FAU')}>Florida Atlantic</div>
                <div onClick={() => fetchTeam('Florida Intl')}>Florida International</div>
                <div onClick={() => fetchTeam('LA Tech')}>Louisiana Tech</div>
                <div onClick={() => fetchTeam('Marshall')}>Marshall</div>
                <div onClick={() => fetchTeam('Mid Tennessee')}>Middle Tennessee</div>
                <div onClick={() => fetchTeam('Charlotte')}>North Carolina Charlotte</div>
                <div onClick={() => fetchTeam('North Texas')}>North Texas</div>
                <div onClick={() => fetchTeam('Old Dominion')}>Old Dominion</div>
                <div onClick={() => fetchTeam('Rice')}>Rice</div>
                <div onClick={() => fetchTeam('Southern Miss')}>Southern Miss</div>
                <div onClick={() => fetchTeam('UTEP')}>Texas El Paso</div>
                <div onClick={() => fetchTeam('UTSA')}>Texas San Antonio</div>
                <div onClick={() => fetchTeam('W Kentucky')}>Western Kentucky</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Independents</div>
                <div onClick={() => fetchTeam('Army')}>Army</div>
                <div onClick={() => fetchTeam('BYU')}>BYU</div>
                <div onClick={() => fetchTeam('UConn')}>Connecticut</div>
                <div onClick={() => fetchTeam('Liberty')}>Liberty</div>
                <div onClick={() => fetchTeam('New Mexico St')}>New Mexico State</div>
                <div onClick={() => fetchTeam('Notre Dame')}>Notre Dame</div>
                <div>Massachusetts</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MAC</div>
                <div onClick={() => fetchTeam('Akron')}>Akron</div>
                <div onClick={() => fetchTeam('Ball State')}>Ball State</div>
                <div onClick={() => fetchTeam('Bowling Green')}>Bowling Green</div>
                <div onClick={() => fetchTeam('Buffalo')}>Buffalo</div>
                <div onClick={() => fetchTeam('Cent Michigan')}>Central Michigan</div>
                <div onClick={() => fetchTeam('E Michigan')}>Eastern Michigan</div>
                <div onClick={() => fetchTeam('Kent State')}>Kent State</div>
                <div onClick={() => fetchTeam('Miami (OH)')}>Miami University</div>
                <div onClick={() => fetchTeam('N Illinois')}>Northern Illinois</div>
                <div onClick={() => fetchTeam('Ohio')}>Ohio University</div>
                <div onClick={() => fetchTeam('Toledo')}>Toledo</div>
                <div onClick={() => fetchTeam('W Michigan')}>Western Michigan</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MWC</div>
                <div onClick={() => fetchTeam('Air Force')}>Air Force</div>
                <div onClick={() => fetchTeam('Boise State')}>Boise State</div>
                <div onClick={() => fetchTeam('Colorado State')}>Colorado State</div>
                <div onClick={() => fetchTeam('Fresno State')}>Fresno State</div>
                <div onClick={() => fetchTeam(`Hawai'i`)}>Hawaii</div>
                <div onClick={() => fetchTeam('Nevada')}>Nevada</div>
                <div onClick={() => fetchTeam('UNLV')}>Nevada Las Vegas</div>
                <div onClick={() => fetchTeam('New Mexico')}>New Mexico</div>
                <div onClick={() => fetchTeam('San Diego State')}>San Diego State</div>
                <div onClick={() => fetchTeam('San Jose State')}>San Jose State</div>
                <div onClick={() => fetchTeam('Utah State')}>Utah State</div>
                <div onClick={() => fetchTeam('Wyoming')}>Wyoming</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Pac 12</div>
                <div onClick={() => fetchTeam('Arizona')}>Arizona</div>
                <div onClick={() => fetchTeam('Arizona State')}>Arizona State</div>
                <div onClick={() => fetchTeam('Cal')}>California</div>
                <div onClick={() => fetchTeam('Colorado')}>Colorado</div>
                <div onClick={() => fetchTeam('Oregon')}>Oregon</div>
                <div onClick={() => fetchTeam('Oregon St')}>Oregon State</div>
                <div onClick={() => fetchTeam('Stanford')}>Stanford</div>
                <div onClick={() => fetchTeam('UCLA')}>UCLA</div>
                <div onClick={() => fetchTeam('USC')}>USC</div>
                <div onClick={() => fetchTeam('Utah')}>Utah</div>
                <div onClick={() => fetchTeam('Washington')}>Washington</div>
                <div onClick={() => fetchTeam('Washington St')}>Washington State</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">SEC</div>
                <div onClick={() => fetchTeam('Alabama')}>Alabama</div>
                <div onClick={() => fetchTeam('Arkansas')}>Arkansas</div>
                <div onClick={() => fetchTeam('Auburn')}>Auburn</div>
                <div onClick={() => fetchTeam('Florida')}>Florida</div>
                <div onClick={() => fetchTeam('Georgia')}>Georgia</div>
                <div onClick={() => fetchTeam('Kentucky')}>Kentucky</div>
                <div onClick={() => fetchTeam('LSU')}>LSU</div>
                <div onClick={() => fetchTeam('Ole Miss')}>Ole Miss</div>
                <div onClick={() => fetchTeam('Miss St')}>Mississippi State</div>
                <div onClick={() => fetchTeam('Missouri')}>Missouri</div>
                <div onClick={() => fetchTeam('S Carolina')}>South Carolina</div>
                <div onClick={() => fetchTeam('Tennessee')}>Tennessee</div>
                <div onClick={() => fetchTeam('Texas A&M')}>Texas A&M</div>
                <div onClick={() => fetchTeam('Vanderbilt')}>Vanderbilt</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Sun Belt</div>
                <div>Appalachian State</div>
                <div onClick={() => fetchTeam('Arkansas State')}>Arkansas State</div>
                <div onClick={() => fetchTeam('C. Carolina')}>Coastal Carolina</div>
                <div onClick={() => fetchTeam('Ga Southern')}>Georgia Southern</div>
                <div onClick={() => fetchTeam('Georgia State')}>Georgia State</div>
                <div onClick={() => fetchTeam('Louisiana')}>Louisiana Lafayette</div>
                <div onClick={() => fetchTeam('UL Monroe')}>Louisiana Monroe</div>
                <div onClick={() => fetchTeam('South Alabama')}>South Alabama</div>
                <div onClick={() => fetchTeam('Texas State')}>Texas State</div>
                <div onClick={() => fetchTeam('Troy')}>Troy</div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default TeamSelectModal;
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
              <div>Central Florida</div>
              <div>Cincinnati</div>
              <div>East Carolina</div>
              <div>Houston</div>
              <div>Memphis</div>
              <div>Navy</div>
              <div>South Florida</div>
              <div>Southern Methodist</div>
              <div>Temple</div>
              <div>Tulane</div>
              <div>Tulsa</div>
            </div>
            <div className="modal-column">
              <div className="modal-header">ACC</div>
              <div>Boston College</div>
              <div>Clemson</div>
              <div>Duke</div>
              <div>Florida State</div>
              <div>Georgia Tech</div>
              <div>Louisville</div>
              <div>Miami</div>
              <div>North Carolina</div>
              <div>North Carolina State</div>
              <div>Pitt</div>
              <div>Syracuse</div>
              <div>Virginia</div>
              <div>Virginia Tech</div>
              <div>Wake Forest</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">B1G</div>
              <div >Illinois</div>
                <div >Indiana</div>
                <div >Iowa</div>
                <div>Maryland</div>
                <div>Michigan</div>
                <div>Michigan State</div>
                <div>Minnesota</div>
                <div>Nebraska</div>
                <div>Northwestern</div>
                <div>Ohio State</div>
                <div>Penn State</div>
                <div>Purdue</div>
                <div>Rutgers</div>
                <div>Wisconsin</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Big 12</div>
              <div onClick={() => fetchTeam('baylor', 0)}>Baylor</div>
              <div onClick={() => fetchTeam('iowast', 1)}>Iowa State</div>
              <div onClick={() => fetchTeam('kansas', 2)}>Kansas</div>
              <div onClick={() => fetchTeam('ksu', 3)}>Kansas State</div>
              <div onClick={() => fetchTeam('oklahoma', 4)}>Oklahoma</div>
              <div onClick={() => fetchTeam('okst', 5)}>Oklahoma State</div>
              <div onClick={() => fetchTeam('tcu', 6)}>TCU</div>
              <div onClick={() => fetchTeam('texas', 7)}>Texas</div>
              <div onClick={() => fetchTeam('ttu', 8)}>Texas Tech</div>
              <div onClick={() => fetchTeam('wvu', 9)}>West Virginia</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">C-USA</div>
              <div onClick={() => fetchTeam('uab', 10)}>Alabama Birmingham</div>
              <div onClick={() => fetchTeam('fau', 1)}>Florida Atlantic</div>
              <div onClick={() => fetchTeam('fiu', 2)}>Florida International</div>
              <div onClick={() => fetchTeam('latech', 3)}>Louisiana Tech</div>
              <div onClick={() => fetchTeam('marshall', 4)}>Marshall</div>
              <div onClick={() => fetchTeam('middletenn', 5)}>Middle Tennessee</div>
              <div onClick={() => fetchTeam('charlotte', 0)}>North Carolina Charlotte</div>
              <div onClick={() => fetchTeam('northtexas', 6)}>North Texas</div>
              <div onClick={() => fetchTeam('odu', 7)}>Old Dominion</div>
              <div onClick={() => fetchTeam('rice', 8)}>Rice</div>
              <div onClick={() => fetchTeam('usm', 9)}>Southern Miss</div>
              <div onClick={() => fetchTeam('utep', 11)}>Texas El Paso</div>
              <div onClick={() => fetchTeam('utsa', 12)}>Texas San Antonio</div>
              <div onClick={() => fetchTeam('wku', 13)}>Western Kentucky</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Independents</div>
              <div onClick={() => fetchTeam('army', 0)}>Army</div>
              <div onClick={() => fetchTeam('byu', 1)}>BYU</div>
              <div onClick={() => fetchTeam('uconn', 1)}>Connecticut</div>
              <div onClick={() => fetchTeam('liberty', 2)}>Liberty</div>
              <div onClick={() => fetchTeam('nmsu', 3)}>New Mexico State</div>
              <div onClick={() => fetchTeam('notredame', 4)}>Notre Dame</div>
              <div onClick={() => fetchTeam('umassamherst', 5)}>Massachusetts</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MAC</div>
              <div onClick={() => fetchTeam('akron', 0)}>Akron</div>
              <div onClick={() => fetchTeam('ball', 1)}>Ball State</div>
              <div onClick={() => fetchTeam('bgsu', 2)}>Bowling Green</div>
              <div onClick={() => fetchTeam('buffalo', 3)}>Buffalo</div>
              <div onClick={() => fetchTeam('cmu', 4)}>Central Michigan</div>
              <div onClick={() => fetchTeam('emu', 5)}>Eastern Michigan</div>
              <div onClick={() => fetchTeam('kent', 6)}>Kent State</div>
              <div onClick={() => fetchTeam('miamioh', 7)}>Miami University</div>
              <div onClick={() => fetchTeam('niu', 8)}>Northern Illinois</div>
              <div onClick={() => fetchTeam('ohio', 9)}>Ohio University</div>
              <div onClick={() => fetchTeam('toledo', 10)}>Toledo</div>
              <div onClick={() => fetchTeam('wmu', 11)}>Western Michigan</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MWC</div>
              <div onClick={() => fetchTeam('afa', 0)}>Air Force</div>
              <div onClick={() => fetchTeam('boisest', 1)}>Boise State</div>
              <div onClick={() => fetchTeam('csu', 2)}>Colorado State</div>
              <div onClick={() => fetchTeam('fresnost', 3)}>Fresno State</div>
              <div onClick={() => fetchTeam('hawaii', 4)}>Hawaii</div>
              <div onClick={() => fetchTeam('nevada', 5)}>Nevada</div>
              <div onClick={() => fetchTeam('unlv', 9)}>Nevada Las Vegas</div>
              <div onClick={() => fetchTeam('unm', 6)}>New Mexico</div>
              <div onClick={() => fetchTeam('sandiegost', 7)}>San Diego State</div>
              <div onClick={() => fetchTeam('sjsu', 8)}>San Jose State</div>
              <div onClick={() => fetchTeam('usu', 10)}>Utah State</div>
              <div onClick={() => fetchTeam('wyoming', 11)}>Wyoming</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Pac 12</div>
              <div onClick={() => fetchTeam('arizona', 0)}>Arizona</div>
              <div onClick={() => fetchTeam('asu', 1)}>Arizona State</div>
              <div onClick={() => fetchTeam('california')}>California</div>
              <div onClick={() => fetchTeam('colorado', 3)}>Colorado</div>
              <div onClick={() => fetchTeam('oregon', 4)}>Oregon</div>
              <div onClick={() => fetchTeam('oregonst', 5)}>Oregon State</div>
              <div onClick={() => fetchTeam('stanford', 6)}>Stanford</div>
              <div onClick={() => fetchTeam('ucla', 7)}>UCLA</div>
              <div onClick={() => fetchTeam('usc', 8)}>USC</div>
              <div onClick={() => fetchTeam('utah', 9)}>Utah</div>
              <div onClick={() => fetchTeam('washington', 10)}>Washington</div>
              <div onClick={() => fetchTeam('wsu', 11)}>Washington State</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">SEC</div>
              <div onClick={() => fetchTeam('alabama')}>Alabama</div>
              <div onClick={() => fetchTeam('arkansas')}>Arkansas</div>
              <div onClick={() => fetchTeam('auburn', 2)}>Auburn</div>
              <div onClick={() => fetchTeam('florida', 3)}>Florida</div>
              <div onClick={() => fetchTeam('georgia', 4)}>Georgia</div>
              <div onClick={() => fetchTeam('kentucky', 5)}>Kentucky</div>
              <div onClick={() => fetchTeam('lsu', 6)}>LSU</div>
              <div onClick={() => fetchTeam('olemiss', 9)}>Ole Miss</div>
              <div onClick={() => fetchTeam('msst', 7)}>Mississippi State</div>
              <div onClick={() => fetchTeam('missouri', 8)}>Missouri</div>
              <div onClick={() => fetchTeam('socarolina', 10)}>South Carolina</div>
              <div onClick={() => fetchTeam('tennessee', 11)}>Tennessee</div>
              <div onClick={() => fetchTeam('ta&m', 12)}>Texas A&M</div>
              <div onClick={() => fetchTeam('vanderbilt', 13)}>Vanderbilt</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Sun Belt</div>
              <div onClick={() => fetchTeam('appst')}>Appalachian State</div>
              <div onClick={() => fetchTeam('arkst', 1)}>Arkansas State</div>
              <div onClick={() => fetchTeam('ccu', 2)}>Coastal Carolina</div>
              <div onClick={() => fetchTeam('gaso', 3)}>Georgia Southern</div>
              <div onClick={() => fetchTeam('georgiast', 4)}>Georgia State</div>
              <div onClick={() => fetchTeam('ull', 5)}>Louisiana Lafayette</div>
              <div onClick={() => fetchTeam('ulm', 6)}>Louisiana Monroe</div>
              <div onClick={() => fetchTeam('usa', 7)}>South Alabama</div>
              <div onClick={() => fetchTeam('txst', 8)}>Texas State</div>
              <div onClick={() => fetchTeam('troy', 9)}>Troy</div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default TeamSelectModal;
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
              <div onClick={() => fetchTeam('ucf')}>Central Florida</div>
              <div onClick={() => fetchTeam('cincinnati')}>Cincinnati</div>
              <div onClick={() => fetchTeam('ecu')}>East Carolina</div>
              <div onClick={() => fetchTeam('houston')}>Houston</div>
              <div onClick={() => fetchTeam('memphis')}>Memphis</div>
              <div onClick={() => fetchTeam('navy')}>Navy</div>
              <div onClick={() => fetchTeam('usf')}>South Florida</div>
              <div onClick={() => fetchTeam('smu')}>Southern Methodist</div>
              <div onClick={() => fetchTeam('temple')}>Temple</div>
              <div onClick={() => fetchTeam('tulane')}>Tulane</div>
              <div onClick={() => fetchTeam('tulsa')}>Tulsa</div>
            </div>
            <div className="modal-column">
              <div className="modal-header">ACC</div>
              <div onClick={() => fetchTeam('bc')}>Boston College</div>
              <div onClick={() => fetchTeam('clemson')}>Clemson</div>
              <div onClick={() => fetchTeam('duke')}>Duke</div>
              <div onClick={() => fetchTeam('fsu')}>Florida State</div>
              <div onClick={() => fetchTeam('gt')}>Georgia Tech</div>
              <div onClick={() => fetchTeam('louisville')}>Louisville</div>
              <div onClick={() => fetchTeam('miami')}>Miami</div>
              <div onClick={() => fetchTeam('unc')}>North Carolina</div>
              <div onClick={() => fetchTeam('ncst')}>North Carolina State</div>
              <div onClick={() => fetchTeam('pitt')}>Pitt</div>
              <div onClick={() => fetchTeam('syracuse')}>Syracuse</div>
              <div onClick={() => fetchTeam('virginia')}>Virginia</div>
              <div onClick={() => fetchTeam('vt')}>Virginia Tech</div>
              <div onClick={() => fetchTeam('wakeforest')}>Wake Forest</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">B1G</div>
              <div onClick={() => fetchTeam('illinois')}>Illinois</div>
              <div onClick={() => fetchTeam('indiana')}>Indiana</div>
              <div onClick={() => fetchTeam('iowa')}>Iowa</div>
              <div onClick={() => fetchTeam('maryland')}>Maryland</div>
              <div onClick={() => fetchTeam('michigan')}>Michigan</div>
              <div onClick={() => fetchTeam('msu')}>Michigan State</div>
              <div onClick={() => fetchTeam('minnesota')}>Minnesota</div>
              <div onClick={() => fetchTeam('nebraska')}>Nebraska</div>
              <div onClick={() => fetchTeam('nw')}>Northwestern</div>
              <div onClick={() => fetchTeam('ohiost')}>Ohio State</div>
              <div onClick={() => fetchTeam('pennst')}>Penn State</div>
              <div onClick={() => fetchTeam('purdue')}>Purdue</div>
              <div onClick={() => fetchTeam('rutgers')}>Rutgers</div>
              <div onClick={() => fetchTeam('wisconsin')}>Wisconsin</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Big 12</div>
              <div onClick={() => fetchTeam('baylor')}>Baylor</div>
              <div onClick={() => fetchTeam('iowast')}>Iowa State</div>
              <div onClick={() => fetchTeam('kansas')}>Kansas</div>
              <div onClick={() => fetchTeam('ksu')}>Kansas State</div>
              <div onClick={() => fetchTeam('oklahoma')}>Oklahoma</div>
              <div onClick={() => fetchTeam('okst')}>Oklahoma State</div>
              <div onClick={() => fetchTeam('tcu')}>TCU</div>
              <div onClick={() => fetchTeam('texas')}>Texas</div>
              <div onClick={() => fetchTeam('ttu')}>Texas Tech</div>
              <div onClick={() => fetchTeam('wvu')}>West Virginia</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">C-USA</div>
              <div onClick={() => fetchTeam('uab')}>Alabama Birmingham</div>
              <div onClick={() => fetchTeam('fau')}>Florida Atlantic</div>
              <div onClick={() => fetchTeam('fiu')}>Florida International</div>
              <div onClick={() => fetchTeam('latech')}>Louisiana Tech</div>
              <div onClick={() => fetchTeam('marshall')}>Marshall</div>
              <div onClick={() => fetchTeam('middletenn')}>Middle Tennessee</div>
              <div onClick={() => fetchTeam('charlotte')}>North Carolina Charlotte</div>
              <div onClick={() => fetchTeam('northtexas')}>North Texas</div>
              <div onClick={() => fetchTeam('odu')}>Old Dominion</div>
              <div onClick={() => fetchTeam('rice')}>Rice</div>
              <div onClick={() => fetchTeam('usm')}>Southern Miss</div>
              <div onClick={() => fetchTeam('utep')}>Texas El Paso</div>
              <div onClick={() => fetchTeam('utsa')}>Texas San Antonio</div>
              <div onClick={() => fetchTeam('wku')}>Western Kentucky</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Independents</div>
              <div onClick={() => fetchTeam('army')}>Army</div>
              <div onClick={() => fetchTeam('byu')}>BYU</div>
              <div onClick={() => fetchTeam('uconn')}>Connecticut</div>
              <div onClick={() => fetchTeam('liberty')}>Liberty</div>
              <div onClick={() => fetchTeam('nmsu')}>New Mexico State</div>
              <div onClick={() => fetchTeam('notredame')}>Notre Dame</div>
              <div onClick={() => fetchTeam('umassamherst')}>Massachusetts</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MAC</div>
              <div onClick={() => fetchTeam('akron')}>Akron</div>
              <div onClick={() => fetchTeam('ball')}>Ball State</div>
              <div onClick={() => fetchTeam('bgsu')}>Bowling Green</div>
              <div onClick={() => fetchTeam('buffalo')}>Buffalo</div>
              <div onClick={() => fetchTeam('cmu')}>Central Michigan</div>
              <div onClick={() => fetchTeam('emu')}>Eastern Michigan</div>
              <div onClick={() => fetchTeam('kent')}>Kent State</div>
              <div onClick={() => fetchTeam('miamioh')}>Miami University</div>
              <div onClick={() => fetchTeam('niu')}>Northern Illinois</div>
              <div onClick={() => fetchTeam('ohio')}>Ohio University</div>
              <div onClick={() => fetchTeam('toledo')}>Toledo</div>
              <div onClick={() => fetchTeam('wmu')}>Western Michigan</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">MWC</div>
              <div onClick={() => fetchTeam('afa')}>Air Force</div>
              <div onClick={() => fetchTeam('boisest')}>Boise State</div>
              <div onClick={() => fetchTeam('csu')}>Colorado State</div>
              <div onClick={() => fetchTeam('fresnost')}>Fresno State</div>
              <div onClick={() => fetchTeam('hawaii')}>Hawaii</div>
              <div onClick={() => fetchTeam('nevada')}>Nevada</div>
              <div onClick={() => fetchTeam('unlv')}>Nevada Las Vegas</div>
              <div onClick={() => fetchTeam('unm')}>New Mexico</div>
              <div onClick={() => fetchTeam('sandiegost')}>San Diego State</div>
              <div onClick={() => fetchTeam('sjsu')}>San Jose State</div>
              <div onClick={() => fetchTeam('usu')}>Utah State</div>
              <div onClick={() => fetchTeam('wyoming')}>Wyoming</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Pac 12</div>
              <div onClick={() => fetchTeam('arizona')}>Arizona</div>
              <div onClick={() => fetchTeam('asu')}>Arizona State</div>
              <div onClick={() => fetchTeam('california')}>California</div>
              <div onClick={() => fetchTeam('colorado')}>Colorado</div>
              <div onClick={() => fetchTeam('oregon')}>Oregon</div>
              <div onClick={() => fetchTeam('oregonst')}>Oregon State</div>
              <div onClick={() => fetchTeam('stanford')}>Stanford</div>
              <div onClick={() => fetchTeam('ucla')}>UCLA</div>
              <div onClick={() => fetchTeam('usc')}>USC</div>
              <div onClick={() => fetchTeam('utah')}>Utah</div>
              <div onClick={() => fetchTeam('washington')}>Washington</div>
              <div onClick={() => fetchTeam('wsu')}>Washington State</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">SEC</div>
              <div onClick={() => fetchTeam('alabama')}>Alabama</div>
              <div onClick={() => fetchTeam('arkansas')}>Arkansas</div>
              <div onClick={() => fetchTeam('auburn')}>Auburn</div>
              <div onClick={() => fetchTeam('florida')}>Florida</div>
              <div onClick={() => fetchTeam('georgia')}>Georgia</div>
              <div onClick={() => fetchTeam('kentucky')}>Kentucky</div>
              <div onClick={() => fetchTeam('lsu')}>LSU</div>
              <div onClick={() => fetchTeam('olemiss')}>Ole Miss</div>
              <div onClick={() => fetchTeam('msst')}>Mississippi State</div>
              <div onClick={() => fetchTeam('missouri')}>Missouri</div>
              <div onClick={() => fetchTeam('socarolina')}>South Carolina</div>
              <div onClick={() => fetchTeam('tennessee')}>Tennessee</div>
              <div onClick={() => fetchTeam('ta&m')}>Texas A&M</div>
              <div onClick={() => fetchTeam('vanderbilt')}>Vanderbilt</div>
            </div>
            <div className="modal-column">
            <div className="modal-header">Sun Belt</div>
              <div onClick={() => fetchTeam('appst')}>Appalachian State</div>
              <div onClick={() => fetchTeam('arkst')}>Arkansas State</div>
              <div onClick={() => fetchTeam('ccu')}>Coastal Carolina</div>
              <div onClick={() => fetchTeam('gaso')}>Georgia Southern</div>
              <div onClick={() => fetchTeam('georgiast')}>Georgia State</div>
              <div onClick={() => fetchTeam('ull')}>Louisiana Lafayette</div>
              <div onClick={() => fetchTeam('ulm')}>Louisiana Monroe</div>
              <div onClick={() => fetchTeam('usa')}>South Alabama</div>
              <div onClick={() => fetchTeam('txst')}>Texas State</div>
              <div onClick={() => fetchTeam('troy')}>Troy</div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default TeamSelectModal;
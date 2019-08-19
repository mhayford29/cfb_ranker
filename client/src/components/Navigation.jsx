import React from 'react';


class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      schools: [],
      conf: ''
    }
  }

  render(){
    const { fetchTeam } = this.props;
    return(
      <div className="navigation-container">
        <div className="navigation-item">
          Polls
          <div className="dropdown-content">
            <div onClick={() => this.props.fetchPoll(0)}>
              AP Poll
            </div>
            <div onClick={() => this.props.fetchPoll(1)}>
              Coaches Poll
            </div>
            <div>
              CFP Committee  
            </div>
          </div>
        </div>
        <div className="navigation-item">
          Conferences
          <div className="dropdown-content">
            <div>
              <span className="test">
                American
              </span>
              <span className="dropdown-submenu" style={{transform: `translate(${56}px, ${-10}px)`}}>
                <div onClick={() => fetchTeam('ucf')}>Central Florida</div>
                <div onClick={() => fetchTeam('cincinnati')}>Cincinnati</div>
                <div onClick={() => fetchTeam('ecu')}>East Carolina</div>
                <div onClick={() => fetchTeam('houston', 3)}>Houston</div>
                <div onClick={() => fetchTeam('memphis', 4)}>Memphis</div>
                <div onClick={() => fetchTeam('navy', 5)}>Navy</div>
                <div onClick={() => fetchTeam('usf', 7)}>South Florida</div>
                <div onClick={() => fetchTeam('smu', 6)}>Southern Methodist</div>
                <div onClick={() => fetchTeam('temple', 8)}>Temple</div>
                <div onClick={() => fetchTeam('tulane', 9)}>Tulane</div>
                <div onClick={() => fetchTeam('tulsa', 10)}>Tulsa</div>
              </span>
            </div>
            <div>
              <span className="test">
                ACC
              </span>
              <span className="dropdown-submenu" style={{transform: `translate(${72}px, ${-48}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Big 10</span>
              <span className="dropdown-submenu" style={{transform: `translate(${66}px, ${-86}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Big-12</span>
              <span className="dropdown-submenu" style={{transform: `translate(${66}px, ${-124}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Conference USA</span>
              <span className="dropdown-submenu" style={{transform: `translate(${33}px, ${-162}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Independents</span>
              <span className="dropdown-submenu" style={{transform: `translate(${45}px, ${-200}px)`}}>
                <div onClick={() => fetchTeam('army', 0)}>Army</div>
                <div onClick={() => fetchTeam('byu', 1)}>BYU</div>
                <div onClick={() => fetchTeam('uconn', 1)}>Connecticut</div>
                <div onClick={() => fetchTeam('liberty', 2)}>Liberty</div>
                <div onClick={() => fetchTeam('nmsu', 3)}>New Mexico State</div>
                <div onClick={() => fetchTeam('notredame', 4)}>Notre Dame</div>
                <div onClick={() => fetchTeam('umassamherst', 5)}>Massachusetts</div>
              </span>
            </div>
            <div>
              <span>MAC</span>
              <span className="dropdown-submenu" style={{transform: `translate(${69}px, ${-238}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Mountain West</span>
              <span className="dropdown-submenu" style={{transform: `translate(${39}px, ${-276}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Pac-12</span>
              <span className="dropdown-submenu" style={{transform: `translate(${65}px, ${-314}px)`}}>
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
              </span>
            </div> 
            <div>
              <span>SEC</span>
              <span className="dropdown-submenu" style={{transform: `translate(${73}px, ${-352}px)`}}>
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
              </span>
            </div>
            <div>
              <span>Sun Belt</span>
              <span className="dropdown-submenu" style={{transform: `translate(${60}px, ${-390}px)`}}>
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
              </span>
            </div> 
          </div>
        </div>
        <div className="navigation-item">
          Standings
        </div>
        <div className="navigation-item">
          Filler
        </div>
        <div className="navigation-item">
          Filler
        </div>
      </div>
    )
  }
}

export default Navigation;
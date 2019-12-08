import React from 'react';
import { HashRouter as Router, Link, NavLink } from 'react-router-dom';
import conferences from '../../../lib/schools.js';
import * as firebase from 'firebase/app';
import 'firebase/auth'

var Navigation = (props) => {
  return(
    <div className="navigation-container">
      <Router>
        <NavLink 
          to='/'
          className="navigation-item">
          Home
        </NavLink>
      </Router>
      <Router>
        <NavLink 
          to='/standings'
          className="navigation-item">
          Standings
        </NavLink>
      </Router>
      <div className="navigation-item">
        Polls
        <div className="dropdown-content">
          <Router>
            {props.publishedPolls.map((poll, index) => {
              return <div>
                        <Link to={`/poll/${index}`}>
                          <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{poll.shortName}</div>
                        </Link>
                      </div>
            })}
          </Router>
        </div>
      </div>
      <Router>
      <div className="navigation-item">
        Conferences
        <div className="dropdown-content">
          <div>
            <span>
              American
            </span>
            <span className="dropdown-submenu" style={{transform: `translate(${56}px, ${-10}px)`}}>
              {conferences.AAC.map((team, index) => {
                return (
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
          <div>
            <span>
              ACC
            </span>
            <span className="dropdown-submenu" style={{transform: `translate(${72}px, ${-48}px)`}}>
            {conferences.ACC.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                ) 
              })}
            </span>
          </div>
          <div>
            <span>Big 10</span>
            <span className="dropdown-submenu" style={{transform: `translate(${66}px, ${-86}px)`}}>
            {conferences.B1G.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
          <div>
            <span>Big-12</span>
            <span className="dropdown-submenu" style={{transform: `translate(${66}px, ${-124}px)`}}>
            {conferences.Big12.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
          <div>
            <span>Conference USA</span>
            <span className="dropdown-submenu" style={{transform: `translate(${33}px, ${-162}px)`}}>
            {conferences.CUSA.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
          <div>
            <span>Independents</span>
            <span className="dropdown-submenu" style={{transform: `translate(${45}px, ${-200}px)`}}>
            {conferences.Ind.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
              <div>Massachusetts</div>
            </span>
          </div>
          <div>
            <span>MAC</span>
            <span className="dropdown-submenu" style={{transform: `translate(${69}px, ${-238}px)`}}>
            {conferences.MAC.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
          <div>
            <span>Mountain West</span>
            <span className="dropdown-submenu" style={{transform: `translate(${39}px, ${-276}px)`}}>
            {conferences.MWC.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div>
          <div>
            <span>Pac-12</span>
            <span className="dropdown-submenu" style={{transform: `translate(${65}px, ${-314}px)`}}>
            {conferences.Pac12.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div> 
          <div>
            <span>SEC</span>
            <span className="dropdown-submenu" style={{transform: `translate(${73}px, ${-352}px)`}}>
            {conferences.SEC.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
            })}
            </span>
          </div>
          <div>
            <span>Sun Belt</span>
            <span className="dropdown-submenu" style={{transform: `translate(${60}px, ${-390}px)`}}>
              <div>Appalachian State</div>
              {conferences.SunBelt.map((team, index) => {
                return(
                  <div>
                    <Link to={`/team/${team}`}>
                      <div style={{ paddingTop: '0px', paddingBottom: '0px'}}>{team}</div>
                    </Link>
                  </div>
                )
              })}
            </span>
          </div> 
        </div>
      </div>
      </Router>
      <div >
        
      </div>
      { props.loginStatus==='LOGGED_OUT' ?
        <div className="signup-login" onClick={() => props.toggleLoginModal(true)}>
          Sign Up / Login
        </div> :
        <div className="user-panel-container">
          <div className="navigation-item" >
            Hello, {firebase.auth().currentUser.displayName}
          </div>
          <Router>
            <NavLink 
              to='/my_ballots'
              className="navigation-item">
              My Ballots
            </NavLink>
          </Router>
          <div className="navigation-item" onClick={props.signOut}>
            Sign Out
          </div>
        </div>
      }
    </div>
  )
}

export default Navigation;
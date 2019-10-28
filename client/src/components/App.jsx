import React from 'react';
import MyRankingsContainer from '../containers/myRankingsContainer.js';
import NavigationContainer from '../containers/navigationContainer.js';
import InfoDisplayContainer from '../containers/infoDisplayContainer.js';

var App = () => (
  <div style={{ marginTop: '0px' }}>
    <div className="navigation">
      <NavigationContainer />
    </div>
    <div className="appContainer">
      <div className="info-display">
        <InfoDisplayContainer />
      </div>
      <div className="rankings">
        <MyRankingsContainer /> 
      </div>
    </div>
  </div>
)


export default App;
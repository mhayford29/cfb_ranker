import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/appContainer.js'
import store from './store.js';
import config from '../../firebaseConfig.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp(config);

ReactDOM.render(<Provider store={store}> <AppContainer /> </Provider>, document.getElementById('app'))
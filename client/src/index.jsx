import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/appContainer.js'
import store from './store.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAA84qCDBk32EGCyOb-jMqj1n7I22PGjeE",
  authDomain: "cfb-ranker.firebaseapp.com",
  databaseURL: "https://cfb-ranker.firebaseio.com",
  projectId: "cfb-ranker",
  storageBucket: "cfb-ranker.appspot.com",
  messagingSenderId: "653104447417",
  appId: "1:653104447417:web:588cc3d422670d9f860068",
  measurementId: "G-XC44H26XEP"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<Provider store={store}> <AppContainer /> </Provider>, document.getElementById('app'))
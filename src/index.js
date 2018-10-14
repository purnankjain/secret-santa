import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SecretSanta from './components/SecretSanta';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import config from './configs/local'

var appConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
};
firebase.initializeApp(appConfig);
ReactDOM.render(<SecretSanta />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

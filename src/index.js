import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './componentes/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

firebase.initializeApp({
	apiKey: "AIzaSyDhF41KuovULu21tIrMbAwR94aIiqWGtWg",
    authDomain: "tutero-8b9ff.firebaseapp.com",
    databaseURL: "https://tutero-8b9ff.firebaseio.com",
    projectId: "tutero-8b9ff",
    storageBucket: "tutero-8b9ff.appspot.com",
    messagingSenderId: "112595835478"
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

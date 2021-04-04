import React from 'react'

import ReactDOM from "react-dom";
import "./index.css";
import firebase from 'firebase'
import 'firebase/firestore'
import App from "./App";
import * as serviceWorker from "./serviceWorker";

var firebaseConfig = {
    apiKey: "AIzaSyD4qlIYIVfjaV0tYHdpVXIwv1wXatC3fF4",
    authDomain: "rahul-bajaj.firebaseapp.com",
    projectId: "rahul-bajaj",
    storageBucket: "rahul-bajaj.appspot.com",
    messagingSenderId: "776698269147",
    appId: "1:776698269147:web:34d349e906cdbc3c23abfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

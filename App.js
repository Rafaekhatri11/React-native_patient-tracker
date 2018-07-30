/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   View,Text
// } from 'react-native';
import Login from './component/auth/login';
import Signup from './component/auth/signup';
import {Router,Scene} from 'react-native-router-flux';
import {Provider } from 'react-redux';
import store from './component/store/index';
import * as firebase from 'firebase';
import Doctorpage from './component/doctor/doctor';

  // Initialize Firebase
 

export default class App extends Component {

  render() {

    return ( 
      <Provider store={store}>

           <Router>
          <Scene key="root">
          <Scene key="/signup" component={Signup} hideNavBar title="Sign Up"/>
          <Scene key="/login" component={Login} hideNavBar title="Log In" initial />
          <Scene key="/doctorpage" component={Doctorpage}   />

          </Scene>
          </Router>
        
      </Provider>
    );
  }
}


const config = {
  apiKey: "AIzaSyBA4sH1p2zXm9jISA4vyL88qryfCNUPtTU",
  authDomain: "react-native-patient-tracker.firebaseapp.com",
  databaseURL: "https://react-native-patient-tracker.firebaseio.com",
  projectId: "react-native-patient-tracker",
  storageBucket: "react-native-patient-tracker.appspot.com",
  messagingSenderId: "145377865993"
};
firebase.initializeApp(config);
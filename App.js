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
import Doctor from './component/doctor/doctor';
import {Router,Scene} from 'react-native-router-flux';
import {Provider } from 'react-redux';
import store from './component/store/index';
import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyC2Re6I2QECdkZ2DpOK7QqFa5hA0n1HeOM",
    authDomain: "myquiz-d54f3.firebaseapp.com",
    databaseURL: "https://myquiz-d54f3.firebaseio.com",
    projectId: "myquiz-d54f3",
    storageBucket: "myquiz-d54f3.appspot.com",
    messagingSenderId: "62983173526"
  };
  firebase.initializeApp(config);

export default class App extends Component {

  render() {

    return ( 
      <Provider store={store}>

           <Router>
          <Scene key="root">
          <Scene key="/signup" component={Signup} hideNavBar title="Sign Up"/>
          <Scene key="/login" component={Login} hideNavBar title="Log In" initial/>
          <Scene key="/doctor" component={Doctor}  title="Doctor" />

          </Scene>
          </Router>
        
      </Provider>
    );
  }
}


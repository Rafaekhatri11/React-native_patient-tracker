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
import {Router,Scene ,Actions} from 'react-native-router-flux';
import {Provider } from 'react-redux';
import store from './component/store/index';
import Doctorpage from './component/doctor/doctor';
import firebase from 'firebase';

 //console.disableYellowBox = true;



export default class App extends Component {
  // componentWillMount(){
  //   firebase.auth().onAuthStateChanged((user) =>{
     
  //     if(user){
  //       console.log(user)
  //        this.setState({login:true})
  //     }
  //     else{
  //       console.log(user)
  //        this.setState({login: false})
  //     }
  //   })
  // }
  constructor(){
    super();
    this.state={
      login : false
    }
  }
  render() {
   // console.log(this.state.login);
    return ( 
      <Provider store={store}>

           <Router>
          <Scene key="root">
         
          <Scene key="signup" component={Signup} hideNavBar title="Sign Up"  />
          <Scene key="login" component={Login} hideNavBar title="Log In" initial={!this.state.login}  />
          <Scene key="doctorpage" component={Doctorpage}  />
         
          
     
          </Scene>
          </Router>
        
      </Provider>
    );
  }
}



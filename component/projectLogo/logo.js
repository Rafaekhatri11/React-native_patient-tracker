import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,

} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {Container,Text} from 'native-base';


export default class Logo extends Component{
    render(){
        return(
            <Container style={styles.container}>
             
                <Container style={styles.logo}>
                <Icon style={styles.iconStyle} name="hospital-marker" color="#900" size={100}  /> 
                <Icon1 style={styles.iconStyle} name="ios-people-outline" color="#900" size={100} /> 
               
             
                <Text style={styles.instructions} >Patient Tracker</Text>
                </Container>
            </Container>
          );
    }
  
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007C15',
    },
    logo : {
      flexDirection: 'row',
      backgroundColor:'#007C15',
      alignItems:'center'
    },
    iconStyle: {
      color:'#fff'
    },
    instructions: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 16
    },
  });
  
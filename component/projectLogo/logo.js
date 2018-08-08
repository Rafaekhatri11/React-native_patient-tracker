import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {Container,Text ,View} from 'native-base';
import { createTransition, FlipX } from 'react-native-transition';
 
const Transition = createTransition(FlipX);

export default class Logo extends Component{
   
    // constructor(){
    //   super();
    //   this.state = {
    //     opacity: 0
    //   }
    // }

    componentDidMount(){
      Transition.show(
        <Container style={styles.container}>
              
                <Container style={styles.logo}>
               
                <Icon style={styles.iconStyle} name="hospital-marker" color="#900" size={100}  /> 
                <Icon1 style={styles.iconStyle} name="ios-people-outline" color="#900" size={100} /> 
               
             
                <Text style={styles.instructions} >Patient Tracker</Text>
               
                </Container>
                
            </Container>)
    }

    render(){
      // console.log(this.state.opacity);
      // let {fadeAnimation} = this.state;
        return(
          <Transition>
            <Container style={styles.container}>
              
                <Container style={styles.logo}>
{/*                
                <Icon style={styles.iconStyle} name="hospital-marker" color="#900" size={100}  /> 
                <Icon1 style={styles.iconStyle} name="ios-people-outline" color="#900" size={100} /> 
               
             
                <Text style={styles.instructions} >Patient Tracker</Text>
                */}
                </Container>
                
            </Container>
            </Transition>
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
      alignItems:'center',
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
  
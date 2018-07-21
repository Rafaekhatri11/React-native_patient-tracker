import React , {Component} from 'react';
import {Container , Text,Button} from 'native-base';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
export default class Doctor extends Component{

    logout(){
        firebase.auth().signOut();
        Actions.push('/login');
    }
    render(){
        return(
            <Container>
                    <Text>Welcome Doctor</Text>
                    <Button>
                        <Text>Log Out</Text>
                    </Button>
            </Container>
        );
    }
}
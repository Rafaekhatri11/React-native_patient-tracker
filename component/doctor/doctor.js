import React, { Component } from 'react';
import { StyleSheet ,Image} from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {DrawerNavigator , DrawerItems} from 'react-navigation';
import Homescreen from './Homescreen';
import SettingScreen from './searchbyname';
import { Header, Body ,Container,Content } from 'native-base';
import SearchByDate from './searchbydate';


export default class Doctorpage extends Component {

    logout() {
        firebase.auth().signOut();
        Actions.push('/login');
    }
   
    render() {
        return (
       
          <MyApp/>
         

        );
    }
}


const CustomeDrawerComponent = (props) => (
    <Container>
        <Header style={styles.header}>
            <Body>
                <Image source={require('./image.jpg')} style={styles.image} /> 
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

const MyApp = DrawerNavigator({
    Home:{
        screen: Homescreen
    },
    Search_Patient :{ 
        screen: SettingScreen
    },
    Search_By_Date : {
        screen : SearchByDate
    }
    
},
{
    initialRouteName:'Home',
    contentComponent: CustomeDrawerComponent,
    drawerOpenRoute : 'DrawerOpen',
    drawerCloseRoute : 'DrawerClose',
    drawerToggleRoute : 'DrawerToggle'
}
)


const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150 ,
        borderRadius: 75,
        marginLeft:'20%'
    },
    logoHeight: {
        height: 200,
        width: 200
    },
    header: {
        height:300,
        padding: 10,
    }
})
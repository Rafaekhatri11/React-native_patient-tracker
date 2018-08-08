import React, { Component } from 'react';
import { StyleSheet, Image, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import Homescreen from './Homescreen';
import Searchbyname from './searchbyname';
import { Header, Body, Container, Content, Button, Text, Left } from 'native-base';
import SearchByDate from './searchbydate';

function logout() {
    firebase.auth().signOut().then(() => {
        console.log("Log out");
        AsyncStorage.removeItem('useruid');
        Actions.push('login');
    })

}
class Doctorpage extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(){
        super();
        this.state ={
            useruid :''
        }
    }
    componentDidMount() {
     
    }
    

    render() {
   
        return (

            <MyApp />


        );
    }
}

export function mapStateToProps(state) {
    return {
       
    }
}

export function mapDispatchToProps(dispatch) {
    return {
     
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Doctorpage)


const CustomeDrawerComponent = (props) => (

    <Container>
        <Header style={styles.header}>
            <Body style={{ backgroundColor: 'green' }}>
                <Image source={require('./image.jpg')} style={styles.image} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
            <Button style={{ paddingLeft: 10 }} onPress={logout} full light>
                <Left>
                    <Text>Log Out</Text>
                </Left>
            </Button>

        </Content>
    </Container>
)



const MyApp = DrawerNavigator({
    Home: {
        screen: Homescreen
    },
    Search_Patient: {
        screen: Searchbyname
    },
    Search_By_Date: {
        screen: SearchByDate
    },

},
    {
        initialRouteName: 'Home',
        contentComponent: CustomeDrawerComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
)


const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginLeft: '20%'
    },
    logoHeight: {
        height: 200,
        width: 200
    },
    header: {
        height: 300,
        padding: 10,
        backgroundColor: 'green'
    }
})



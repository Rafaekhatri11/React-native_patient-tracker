import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {
    View, Left, StyleSheet, Right, Body, Item, Input,
    Icon, Button, Container, Header, Text, Card, Content, CardItem
} from 'native-base';


class Searchbyname extends Component {
    constructor(){
        super();
        this.state ={
            getpatient : [],
            search : '',
            useruid:''
        }
    }

    componentDidMount(){
      
        // AsyncStorage.getItem('useruid').then((uid) =>{
        //     this.setState({useruid: uid})
        // });
        firebase.database().ref(`/patients/${this.props.getuid}/`).on('value', snap => {
            let data = snap.val();
            let array = [];
            for (var key in data) {
                // console.log(key, data[key]);
                array.push({ key: key, data: data[key] });

            }
          this.setState({getpatient : array})
        })
    }
   
   
   
    render() {
        let filterOut = this.state.getpatient.filter((values) =>{
            return values.data.Name.indexOf(this.state.search) !== -1;
        });
        
        return (
            <Container>
                <Header style={{backgroundColor:'green'}}>
                    <Left>
                        <Icon name="menu"
                            onPress={() => this.props.navigation.openDrawer()}>
                        </Icon>
                    </Left>
                    <Right />
                    <Body />
                </Header>
                <Header searchBar rounded style={{backgroundColor:'green'}}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={(evt) => this.setState({search:evt})} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <Text>Setting Screen</Text>
                     {
                        filterOut && filterOut.map((text, index) => {
                           
                            return (
                                <Card key={index} style={{ flex: 0 ,borderBottomColor:'black' }} >
                                    <CardItem>
                                        <Body>
                                            <Text>Name :{text.data.Name}</Text>
                                            <Text>Date{text.data.Date}</Text>
                                         
                                        </Body> 
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Text>Address: {text.data.Address}</Text>
                                            <Text>Description: {text.data.Info}</Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            
                                            <Text>Gender: {text.data.Gender}</Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            )
                        }) 
                    } 
                    
                </Content>


            </Container>
        )
    }
}


export function mapStateToProps(state) {
    console.log(state)
    return {
        getuid: state.doctorpageforid,
        
    }
}

export function mapDispatchToProps(dispatch) {
    return {
      
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Searchbyname)

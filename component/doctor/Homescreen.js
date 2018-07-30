import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet  } from 'react-native';
import {
    View, Icon, Left, Button, Body, Right, DatePicker,
    Container, Header, Content, Text, Item, Input, Radio, Form
} from 'native-base';
import RadioGroup from 'react-native-custom-radio-group';
const radioGroupList= [
    {
        label:'Male',
        value: 'Male'
    },
    {
        label:'Female',
        value: 'Female'
    }
]

export default class Homescreen extends Component {
    
    constructor() {
        super();    
        this.state = {
            patientName: '',
            patientAddress: '',
            patientInformation: '',
            radiobuttonValue: 0,
            genderValue :'',
            Date: null,
            value: ""
        }
       
    }
   
    
   
    addPatients() {
        if (this.state.patientName === "" || this.state.genderValue === ""||this.state.patientAddress === "" ,this.state.patientInformation === "" || this.state.Date === null) {
            alert('Please select all fields');
        }
        else {
            console.log(this.state);
            firebase.auth().onAuthStateChanged((user) =>{
                firebase.database().ref(`/patients/${user.uid}/`).push().set({
                    Name : this.state.patientName,
                    Address: this.state.patientAddress,
                    Info : this.state.patientInformation,
                    Gender: this.state.genderValue,
                     Date: this.state.Date,
                });
            })
            
            alert('Successfully add');
        }
    }

  
    render() {
        return (
            <Container>
                <Header>
                    <Left>

                        <Icon name="menu"
                            onPress={() => this.props.navigation.openDrawer()}>
                        </Icon>
                    </Left>
                    <Right />
                    <Body />
                </Header>
                <Content style={styles.contentStyle}>
                    <Form>

                        <Item success>
                            <Input placeholder='Patient Name' value={this.state.patientName} onChangeText={(val) => this.setState({ patientName: val })} />
                        </Item>



                        <Item success>
                            <Input placeholder='Address' value={this.state.patientAddress} onChangeText={(val) => this.setState({ patientAddress: val })} />
                        </Item>


                        <Item success>
                            <Input placeholder='Information' value={this.state.patientInformation} onChangeText={(val) => this.setState({ patientInformation: val })} />
                        </Item>

                        <Item>
                            <DatePicker
                                defaultDate={new Date()}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(date) => this.setState({ Date: date })}
                                value={this.state.Date}
                            />
                        </Item>
                        {/* <Item>
                            <Left style={styles.radioStyle}>
                                <Text style={styles.radioStyle}>Male</Text>
                                <Radio value="Male"  onPress={(radio) => this.setState({ gender: radio.target.valueOf })} />
                                <Text style={styles.radioStyle}>Female</Text>
                                <Radio value="Female" onPress={(radio) => this.setState({ gender: radio.target.valueOf })} />
                            </Left>
                        </Item> */}
                        <View>
                            <Left style={styles.radioStyle}>
                            
                                <RadioGroup buttonContainerStyle={styles.radiobuttonstyle}
                                 radioGroupList={radioGroupList} onChange={(value) => this.setState({genderValue: value })}
                                 />
                            </Left>
                        </View>
                       

                        <View style={styles.addbuttonstyle}>
                            <Button iconLeft light primary onPress={() => this.addPatients()}>
                                <Icon name='add' />
                                <Text>Home</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    contentStyle: {
        marginLeft: '0%',
    },
    radioStyle: {
        paddingLeft: 50,
        flexDirection: 'row',
    },
    addbuttonstyle: {
        marginRight: 'auto',
        marginLeft: 'auto'

    },
    radiobuttonstyle: {
        width:80,
        height:10
    }
})
import React, { Component } from 'react';
import firebase from 'firebase';
import { StyleSheet ,AsyncStorage } from 'react-native';
import {
    View, Icon, Left, Button, Body, Right, DatePicker,
    Container, Header, Content, Text, Item, Input, Radio, Form
} from 'native-base';
import {filterOutPatients ,getpatients } from '../store/action/action';
import {connect} from 'react-redux';
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

 class Homescreen extends Component {
    
    constructor() {
        super();    
        this.state = {
            patientName: '',
            patientAddress: '',
            patientInformation: '',
            radiobuttonValue: 0,
            genderValue :'',
            Date: null,
            value: "",
            useruid : ''
        }
       
    }

    componentWillMount(){
      
        AsyncStorage.getItem('useruid').then((uid) =>{
            this.setState({useruid: uid})
        })
    }
   
    addPatients() {
        
     
        if (this.state.patientName === "" || this.state.genderValue === ""||this.state.patientAddress === "" ,this.state.patientInformation === "" || this.state.Date === null) {
            alert('Please select all fields');
        }
        else {
            console.log(this.state);

            
            let detail = {
                uid : this.state.useruid,
                patientName: this.state.patientName,
                patientAddress: this.state.patientAddress,
                patientInformation : this.state.patientInformation,
                Date : this.state.Date,
                genderValue: this.state.genderValue
            }
            this.props.filterOutPatients(detail);
            alert('Successfully add');
       }
    }
 setDate(newDate) {
     console.log(newDate);
     let day = newDate.getDate();
     let month= newDate.getMonth();
     let year = newDate.getFullYear();
     let fulldate = day+"-"+ (++month) +"-"+ year;
     console.log(fulldate);
    this.setState({ Date: fulldate });
  }
  
    render() {
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
                                minimumDate={new Date()}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select date"
                                textStyle={{ color: "green" }}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(ev) => this.setDate(ev)}
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
                            
                                <RadioGroup buttonContainerStyle={{width:80,height:10}}
                                 radioGroupList={radioGroupList} onChange={(value) => this.setState({genderValue: value })}
                                 />
                            </Left>
                        </View>
                       

                        <View style={styles.addbuttonstyle}>
                            <Button iconLeft light style={{backgroundColor:'green'}}  onPress={() => this.addPatients()}>
                                <Icon name='add'    />
                                <Text>Add</Text>
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
        paddingTop: "20%",
    },
    radioStyle: {
        paddingLeft: 50,
        flexDirection: 'row',
    },
    addbuttonstyle: {
        marginRight: 'auto',
        marginLeft: 'auto'

    },

})


export function mapStateToProps(state) {
    console.log(state)
    return {    
        getuid : state.doctorpageforid
    }   
}

export function mapDispatchToProps(dispatch) {
    return {
        filterOutPatients : (uid) => {
            dispatch(
                filterOutPatients(uid)
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homescreen)

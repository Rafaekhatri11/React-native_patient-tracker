import React, { Component } from 'react';
import { Container, Header, Content, CardItem,Card,
     DatePicker, Text ,Left,Right,Body,Icon} from 'native-base';

import firebase from 'firebase';
import {connect } from 'react-redux';

 class SearchByDate extends Component {
    constructor() {
        super();
        this.state = { chosenDate: new Date() , searchdate :"" ,getpatient: []};
        this.setDate = this.setDate.bind(this);
    }

    // componentWillMount(){
      
    //     AsyncStorage.getItem('useruid').then((uid) =>{
    //         this.setState({useruid: uid})
    //     })
    // }
   

    componentDidMount(){
       
        firebase.database().ref(`/patients/${this.props.getuid}/`).on('value', snap => {
            let data = snap.val();
            let array = [];
            for (var key in data) {
                array.push({ key: key, data: data[key] });

            }
          
            //this.props.filterOutPatients(array);
            this.setState({getpatient :array})
        })
    }
    setDate(newDate) {
        console.log(newDate);
        let day = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
      //  console.log( day+"-"+(++month)+"-"+year);
        this.setState({ chosenDate: newDate , searchdate : day+"-"+(month+1)+"-"+year});
        console.log(this.state.searchdate);
        
    }
    render() {
       
        let filterOut = this.state.getpatient.filter((values) =>{
          
            return values.data.Date.indexOf(this.state.searchdate) !== -1;
        });
        return (
            <Container>
                <Header  style={{backgroundColor:'green'}}>
                    <Left>
                        <Icon name="menu"
                            onPress={() => this.props.navigation.openDrawer()}  >

                        </Icon>
                    </Left>
                    <Right />
                    <Body />
                </Header>
                <Content>
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
                        onDateChange={this.setDate}
                    />
                    <Text>
                        Date: {this.state.chosenDate.toString().substr(4, 12)}
                    </Text>
                    {
                        filterOut && filterOut.map((text, index) => {
                            console.log(text)
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
        );
    }
}

export function mapStateToProps(state) {
    console.log(state)
    return {
        getuid: state.doctorpageforid,
        getpatientdata : state.filterpatients
    }
}

export function mapDispatchToProps(dispatch) {
    return {
     
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByDate)

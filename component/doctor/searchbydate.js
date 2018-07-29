import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text ,Left,Right,Body,Icon} from 'native-base';



export default class SearchByDate extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    render() {
        return (
            <Container>
                <Header>
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
                        defaultDate={new Date(2018, 4, 4)}
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
                </Content>
            </Container>
        );
    }
}
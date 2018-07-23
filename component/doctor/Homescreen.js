import React, { Component } from 'react';

import {StyleSheet} from 'react-native';
import { View, Icon,Left, Button,Body,Right,
     Container, Header, Content, Text } from 'native-base';



export default class Homescreen extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        
                        <Icon name="menu"
                            onPress={() => this.props.navigation.openDrawer()} >

                        </Icon>
                    </Left>
                    <Right />
                        <Body />
                </Header>
                <Content style={styles.contentStyle}>
                    <Text>Home Screena</Text>
                </Content>
            </Container>
        )
    }
}


const styles =  StyleSheet.create({
    contentStyle : {
        marginLeft: '30%',
    }
})
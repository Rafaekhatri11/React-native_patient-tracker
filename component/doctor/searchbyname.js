import React, { Component } from 'react';


import {
    View, Left, StyleSheet, Right, Body,Item,Input,
    Icon, Button, Container, Header, Content, Text
} from 'native-base';



export default class SettingScreen extends Component {
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
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <Text>Setting Screen</Text>
                </Content>
            </Container>
        )
    }
}
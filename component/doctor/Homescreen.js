import React, { Component } from 'react';

import { StyleSheet } from 'react-native';
import {
    View, Icon, Left, Button, Body, Right, ListItem,
    Container, Header, Content, Text, Item, Input, Radio, Form
} from 'native-base';



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
                    <Form>

                        <Item success>
                            <Input placeholder='Patient Name' />
                        </Item>
                   

                   
                        <Item success>
                            <Input placeholder='Address' />
                        </Item>
                   

                        <Item success>
                            <Input placeholder='Information' />
                        </Item>
                
                        <Item>
                        <Left  style={styles.radioStyle}>
                            <Text style={styles.radioStyle}>Male</Text>
                            <Radio selected={true} />
                            <Text style={styles.radioStyle}>Female</Text>
                            <Radio selected={true} />
                        </Left>
                        </Item>

                    <View style={styles.addbuttonstyle}>
                    <Button  iconLeft light primary>
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
    addbuttonstyle:{
        marginRight: 'auto',
        marginLeft:'auto'
    
    },
    listItemStyle :{
        borderBottomColor: '#000',
    }
})
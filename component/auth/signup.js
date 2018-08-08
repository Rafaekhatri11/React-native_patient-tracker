import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { signUp, doctorpageforuid, loadersignup } from '../store/action/action';
import { Container, Text, Item, Input, Icon, Content, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            username: '',
            password: '',
            loader: false
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('recieve props ', nextProps);
        this.setState({ loader: nextProps.getflag.loaderforsignup })
    }

    mySignUpFuction() {
        if (this.state.username === "" || this.state.password === "" || this.state.name === "") {
            alert('please enter all fields');
        }
        else {

        }
        let trueflag = true;
        let detail = {
            name: this.state.name,
            email: this.state.username,
            pass: this.state.password,
            falseflag: false
        }
        this.props.loadersignup(trueflag);
        this.props.signUp(detail);

    }
    render() {
        return (
            <Container style={styles.container}>

                <Item style={styles.itemCss}>
                    <Icon active style={styles.iconColor} name="home" />
                    <Input style={styles.inputColor} placeholderTextColor='white' placeholder='Name'
                        onChangeText={(evt) => this.setState({ name: evt })} value={this.state.name}
                    />
                </Item>

                <Item style={styles.itemCss}>
                    <Icon active style={styles.iconColor} name="person" />
                    <Input style={styles.inputColor} placeholderTextColor='white' placeholder='Username'
                        onChangeText={(evt) => this.setState({ username: evt })}
                    />
                </Item>

                <Item style={styles.itemCss}>
                    <Icon active style={styles.iconColor} name="eye" />
                    <Input style={styles.inputColor} placeholderTextColor='white' placeholder='Password'
                        onChangeText={(evt) => this.setState({ password: evt })} secureTextEntry={true}
                    />
                </Item>
                {
                    this.state.loader ?
                        <Content>
                            <Spinner color="white" />
                        </Content> :
                        <Item style={styles.signupButton}>
                            <Button full light style={styles.button} onPress={() => this.mySignUpFuction()} >
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </Button>
                        </Item>


                }
                <Container style={styles.containerCss}>
                    <Text style={styles.textCss}>Already have an account?</Text>
                    <Text style={styles.linkCss} onPress={() => Actions.push('login')}>
                        Log In</Text>

                </Container>

            </Container>
        );
    }
}

export function mapStateToProps(state) {
    return {
        getflag: state
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        signUp: (detail) => {
            dispatch(
                signUp(detail)
            )
        },
        doctorpageforuid: (uid) => {
            dispatch(
                doctorpageforuid(uid)
            )
        },
        loadersignup: (flag) => {
            dispatch(
                loadersignup(flag)
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007C15',
        paddingTop: '50%'
        //  verticalAlign: 'middle'
    },
    iconColor: {
        color: 'white'
    },
    inputColor: {
        color: 'white',

    },
    itemCss: {
        marginLeft: 20,
        marginRight: 20
    },
    linkCss: {
        color: 'lightblue'
    },
    textCss: {
        color: 'white',
        padding: 'auto'
    },
    containerCss: {
        backgroundColor: "#007C15",
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    signupButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 20,

    },
    button: {
        width: '90%',
        paddingLeft: '32%',
        paddingRight: '32%'
    },
})
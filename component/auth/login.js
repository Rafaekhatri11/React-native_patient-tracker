import React, { Component } from 'react';
import {
    StyleSheet,
    AsyncStorage
} from 'react-native';

import { Container, Text, Item, Input, Icon, Button, Content, Spinner } from 'native-base';
import { signIn, doctorpageforuid, loadersignin } from '../store/action/action';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase from 'firebase';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
            loader: false,
            username: "",
            password: ""
        }
    }

    componentWillMount(){
        
        firebase.auth().onAuthStateChanged((data) => {
            AsyncStorage.getItem('useruid').then((uid) =>{
                console.log('willmount' ,uid);
                if(data.uid === uid ){
                    Actions.push('doctorpage')
                }
                else{
                    Actions.push('login')
                }
            })
           
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log('will recieve props', nextProps);
        this.setState({ loader: nextProps.getflag.loaderforsignin });
    }


    myLogInFuction() {
        let trueflag = true;
      
       
    
        if( this.state.username === "" || this.state.password === "") {
            alert('Please fill all the fields');
        }
        else { 
            this.props.loadersignin(trueflag);
            let detail = {
                email : this.state.username,
                pass : this.state.password,
                falseflag : false
            }
           this.props.signIn(detail);
           
        }
    }

        // firebase.auth().signInWithEmailAndPassword(email, pass)
        //     .then((data) => {

        //         firebase.database().ref(`/users/${data.user.uid}/`).once('value').then((user) => {
        //             console.log(user.key)
        //             if (user.key === null) {
        //                 alert('User has been deleted by admin');
        //                 firebase.auth().currentUser.delete();
        //             }

        //             else {  
        //                 let success = 'successfully logged in';
        //                 this.props.signIn(success); 
        //                 this.props.doctorpageforuid(data.user.uid);
        //                 Actions.push("doctorpage");
        //             }
        //         })

            // })

           

        render() {
            return (
                <Container >
                    {/* {
                    this.state.open ? <Logo /> : */}
                    <Container style={styles.container}>

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
                                </Content>
                                :
                                <Item style={styles.loginButton}>
                                    <Button full light style={styles.button} onPress={() => this.myLogInFuction()} >
                                        <Text style={styles.buttonText}>Log In</Text>
                                    </Button>
                                </Item>

                        }
                        <Container style={styles.containerCss}>
                            <Text style={styles.textCss}>Don't have an account? </Text>
                            <Text style={styles.linkCss} onPress={() => Actions.push('signup')}>
                                Sign Up</Text>

                        </Container>

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
        signIn : (detail) => {
            dispatch(
                signIn(detail)
            )
        },
        doctorpageforuid: (uid) => {
            dispatch(
                doctorpageforuid(uid)
            )
        },
        loadersignin: (flag) => {
            dispatch(
                loadersignin(flag)
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007C15',
        paddingTop: '40%'
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
    loginButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 20,

    },
    button: {

        paddingLeft: '32%',
        paddingRight: '32%',

    },
})
import React, { Component } from 'react';
import {
    StyleSheet,

} from 'react-native';

import { Container, Text, Item, Input, Icon,Button ,Content,Spinner} from 'native-base';
import Logo from '../projectLogo/logo';
import {signIn} from '../store/action/action';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import firebase from 'firebase';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
            loader:true,
            username:"",
            password:""
        }
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ open: false })
    //     }, 1000);
    // }
  
    myLogInFuction(){
        this.setState({loader:false})
        let email = this.state.username;
        let pass = this.state.password
       firebase.auth().signInWithEmailAndPassword(email,pass)
       .then((data) =>{
           if(data.val() === null){
               alert('User has been deleted by admin');
               firebase.auth().currentUser.delete();
           }
           else {
              firebase.database(`/users/${data.user.uid}/`).once('value').then((data) => console.log(data.val()));
              let success = 'successfully logged in';
             //  this.props.signIn(success);
             //  Actions.push('/doctor');

          }
       })

       .catch((err) =>{
           this.props.signIn(err);
           alert(err);
       })
    }
    render() {
        return (
            <Container >
                {/* {
                    this.state.open ? <Logo /> : */}
                        <Container style={styles.container}>

                            <Item style={styles.itemCss}>
                                <Icon active style={styles.iconColor} name="person" />
                                <Input style={styles.inputColor} placeholderTextColor='white' placeholder='Username' 
                                    onChangeText={(evt)=> this.setState({username:evt})}
                                />
                            </Item>

                            <Item style={styles.itemCss}>
                                <Icon active style={styles.iconColor} name="eye" />
                                <Input style={styles.inputColor} placeholderTextColor='white' placeholder='Password'
                                    onChangeText={(evt) => this.setState({password:evt})}
                                />
                            </Item>

                            {
                                this.state.loader ?
                                <Item style={styles.loginButton}>
                                <Button full light  style={styles.button} onPress={() => this.myLogInFuction()} >
                                    <Text style={styles.buttonText}>Log In</Text>
                                </Button>
                                </Item>  :
    
                                <Content>
                                    <Spinner color="white"/>
                                </Content>
                            }
                            <Container style={styles.containerCss}>
                                <Text style={styles.textCss}>Don't have an account? </Text>
                                <Text style={styles.linkCss} onPress={() => Actions.push('/signup')}>
                                     Sign Up</Text>
                        
                            </Container>
                           
                        </Container>
                {/* } */}
            </Container>
        );
    }
}

export function mapStateToProps(state){
    return{

    }
}

export function mapDispatchToProps(dispatch){
    return{
        signIn : (result) =>{
            dispatch(
                signIn(result)
            )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

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
    loginButton:{
        marginLeft:'auto',
        marginRight:'auto',
        paddingTop: 20,

    },
    button : {
        
        paddingLeft:'32%',
        paddingRight:'32%',
        
    },
})
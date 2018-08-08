import myActions from '../constant/constant';
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBA4sH1p2zXm9jISA4vyL88qryfCNUPtTU",
    authDomain: "react-native-patient-tracker.firebaseapp.com",
    databaseURL: "https://react-native-patient-tracker.firebaseio.com",
    projectId: "react-native-patient-tracker",
    storageBucket: "react-native-patient-tracker.appspot.com",
    messagingSenderId: "145377865993"
};
firebase.initializeApp(config);


export function signUp(detail) {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(detail.email, detail.pass)
            .then((data) => {
                console.log(data.user.uid);
                firebase.database().ref(`/users/${data.user.uid}/`).set({
                    name: detail.name,
                    email: detail.email,
                    password: detail.pass
                })
                dispatch({type : myActions.doctorpageforid , payload : data.user.uid});
                dispatch({type : myActions.loaderforsignup , payload : detail.falseflag})
                Actions.push('doctorpage')
            })
            .catch((err) => {
                dispatch({type : myActions.loaderforsignup , payload : detail.falseflag})
                alert(err);
            })
    }

}

export function loadersignup(flag) {
    return dispatch => {
        dispatch({
            type: myActions.loaderforsignup,
            payload: flag
        })
    }
}

export function loadersignin(flag) {
    return dispatch => {
        dispatch({
            type: myActions.loaderforsignin,
            payload: flag
        })
    }
}

export function signIn(detail) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(detail.email, detail.pass)
            .then((data) => {
                firebase.database().ref(`/users/${data.user.uid}/`).once('value').then(() => {
                    console.log('step 44')
                    if (data.user === null) {
                        alert('User has been deleted by admin');
                        firebase.auth().currentUser.delete();
                        dispatch({ type: myActions.loaderforsignin, payload: detail.falseflag })
                    }
                    else {
                        AsyncStorage.setItem('useruid', data.user.uid);
                     
                        
                        dispatch({ type: myActions.doctorpageforid, payload: data.user.uid });
                        dispatch({ type: myActions.loaderforsignin, payload: detail.falseflag });
                        Actions.push("doctorpage");
                    }
                }).catch((err) => {
                    alert(err);
                    dispatch({ type: myActions.loadersignin, payload: detail.falseflag });
                })
            }).catch((err) => {
                alert(err);
                dispatch({ type: myActions.loadersignin, payload: detail.falseflag });
            })
    }
}

export function doctorpageforuid(uid) {
    return dispatch => {
        dispatch({
            type: myActions.doctorpageforid,
            payload: uid
        })
    }
}
export function senddata(data) {
    return dispatch => {
        dispatch({
            type: myActions.senddata,
            payload: data
        })
    }
}

export function filterOutPatients(data) {
    return dispatch => {
        firebase.database().ref(`/patients/${data.uid}/`).push().set({
            Name: data.patientName,
            Address: data.patientAddress,
            Info: data.patientInformation,
            Gender: data.genderValue,
            Date: data.Date,
        });
    }
}

export function getpatients(array){
    return dispatch => {
        dispatch({type :myActions.getpatients , payload : array})
    }
}
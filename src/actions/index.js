import constants from './../constants';
const {firebaseConfig} = constants;
import firebase from 'firebase';
import "firebase/auth";

export const signUp = () => {
    return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth()
    .signInAnonymously()
    .then(result => console.log())
    .catch(error => console.log(error));
  };
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth()
    .signOut()
    .then( () => console.log("Signed Out"))
    .catch(error => console.log(error));
  };
}

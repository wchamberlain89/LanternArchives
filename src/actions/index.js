import constants from './../constants';
const {firebaseConfig} = constants;
import firebase from 'firebase';
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

export const signUp = () => dispatch => {
  firebase.auth()
    .signInAnonymously()
    .then(result => console.log("SignedUp"))
    .catch(error => console.log(error));
}

import constants from './../constants';
const {firebaseConfig} = constants;
import firebase from 'firebase';
import "firebase/auth";

export function signUp() {
    return () => firebase.auth()
    .signInAnonymously()
    .then(result => console.log("SignedUp"))
    .catch(error => console.log(error));
}

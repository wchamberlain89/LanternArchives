import constants from './../constants';
const {firebaseConfig} = constants;
import Firebase from 'firebase';
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

export function registerUser() {
  firebase.auth().signInAnonymously().catch(function(error){

  });
}

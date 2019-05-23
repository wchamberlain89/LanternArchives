import constants from './../constants';
const {firebaseConfig} = constants;
import firebase from 'firebase';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';
import React from 'react';
import newResourceSet from './../DummyData/items';

export const signUp = (user) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth()
      .createUserWithEmailAndPassword(
        user.email,
        user.password
      )
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };
};

export const signIn = (user) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth()
      .signInWithEmailAndPassword(
        user.email,
        user.password
      )
      .then(result => console.log("something"))
      .catch(error => console.log(error));
  };
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth()
      .signOut()
      .then( () => console.log('Signed Out'))
      .catch(error => console.log(error));
  };
};

export const createSettlement = (userId) => {
  return (dispatch, getState, {getFirebase}) => {
    console.log("attempting to add settlement")
    const firebase = getFirebase();
    const resourcesKey = firebase.database().ref('resources').push(newResourceSet).key
    firebase.database().ref('settlements')
    .push({ name: "MuckSpring", user: userId, resources: resourcesKey  })
  }
}

export const updateQty = (item, qty, settlementId) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.database().ref().child('/settlements/' + settlementId + '/resources/' + item)
    .update({qty: qty})
    .then(()=> console.log('success'))
    .catch(error => console.log(error))
  }
}

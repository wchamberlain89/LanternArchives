import React from 'react';
import { connect } from 'react-redux';
import { signUp, signOut } from './../../actions';
import Test  from './../Test';
import SignIn from './../Auth/SignIn';
import Register from './../Auth/Register';
function Landing ({dispatch}) {

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <div>
      <Test/>
      <SignIn/>
      <Register/>
    </div>
  )
}

export default connect()(Landing);

import React from 'react';
import { connect } from 'react-redux';
import { signUp, signOut } from './../../actions';
import Test  from './../Test';
import SignIn from './../Auth/SignIn';
import Register from './../Auth/Register';

function Landing ({dispatch}) {

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    
      <button type='button' onClick={handleSignOut}>Signout</button>

  );
}

export default connect()(Landing);

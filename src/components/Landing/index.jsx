import React from 'react';
import { connect } from 'react-redux';
import { signUp, signOut } from './../../actions';
import Test  from './../Test';

function Landing ({dispatch}) {

  function handleRegister(event) {
    dispatch(signUp())
    event.preventDefault();
  }

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <div>
      <Test/>

      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Confirm Password"/>
        <button type="submit" onClick={handleSignOut}>Register</button>
      </form>
    </div>
  )
}

export default connect()(Landing);

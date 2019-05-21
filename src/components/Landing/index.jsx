import React from 'react';
import { connect } from 'react-redux';
import { signUp } from './../../actions';
import Test  from './../Test';

function Landing ({dispatch}) {

  function handleRegister(event) {
    dispatch(signUp())
    event.preventDefault();
  }

  return (
    <div>
      <Test/>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button
          onClick={handleRegister}
        type="submit">Login</button>
      </form>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Confirm Password"/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default connect()(Landing);

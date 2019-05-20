import React from 'react';
import { connect } from 'react-redux';
import {registerUser} from './../../actions';

function Landing () {

  function handleRegister(event) {
    const {registerUser} = this.props;
    registerUser();
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button
          onclick={handleRegister}
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

export default connect(null, registerUser)(Landing);

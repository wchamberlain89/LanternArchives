import React from 'react';
import {connect} from 'react-redux';
import { signUp } from './../../../actions';

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister(event) {
    this.props.signUp();
    event.preventDefault();
  }

  render() {
    return (
      <form>
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="Password"/>
      <button
      onClick={this.handleRegister}
      type="submit">Register</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: () => dispatch(signUp())
  }
};

export default connect(null, mapDispatchToProps)(SignIn);

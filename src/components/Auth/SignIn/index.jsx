import React from 'react';
import {connect} from 'react-redux';
import { signIn } from './../../../actions';
import { compose } from 'react-redux';
class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSignIn(event) {
    event.preventDefault();
    this.props.signIn(this.state);
    console.log(this.props)
  }

  handleChange(e) {
    let state = Object.assign({}, this.state);
    console.log(state)
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Email"    name="email"    onChange={this.handleChange}/>
        <input type="text" placeholder="Password" name="password" onChange={this.handleChange}/>
        <button
          onClick={this.handleSignIn} type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user))
  };
};

// compose()

export default connect(null, mapDispatchToProps)(SignIn);

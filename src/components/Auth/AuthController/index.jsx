import React from 'react';
import SignIn from './../SignIn';
import Register from './../Register';
import Test from './../../Test';
import Landing from './../../Landing';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router';

class AuthController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignIn: true
    }
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    const state = Object.assign({}, this.state);
    state.showSignIn = !state.showSignIn;
    this.setState(state);
  }

  render() {
    if (this.props.auth.uid) {
      return (
        <Redirect to="/settlements" />
      )
    }
    const formShowing = this.state.showSignIn ? <SignIn {...this.props}/> : <Register/>
    return (
      <div>
        <Test/>
        <Landing/>
        {formShowing}
        <button onClick={this.toggleForm}> Toggle Form </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(AuthController);

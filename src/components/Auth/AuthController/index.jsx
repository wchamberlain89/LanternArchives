import React from 'react';
import SignIn from './../SignIn';
import Register from './../Register';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router';
import {containerStyles} from './styles';
import HomeLogo from './../../HomeLogo';

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
        <Redirect to="/" />
      )
    }
    const formShowing = this.state.showSignIn ? <SignIn {...this.props} toggleForm={this.toggleForm}/> : <Register toggleForm={this.toggleForm}/>
    return (
      <div style={containerStyles}>
        <HomeLogo/>
        {formShowing}
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

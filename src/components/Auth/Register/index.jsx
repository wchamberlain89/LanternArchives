import React from 'react';
import {connect} from 'react-redux';
import { signUp } from './../../../actions';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields : {
        email: '',
        password: ''
      },
      formErrors : {}
    };
    this.handleRegister = this.handleRegister.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleRegister(event) {
    this.props.signUp();
    event.preventDefault();
  }

  handleChange(e) {
    let fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    console.log(fields)
  }

  render() {
    return (
      <form>
      <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
      <input type="text" placeholder="Password" name="password" onChange={this.handleChange}/>
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

export default connect(null, mapDispatchToProps)(Register);

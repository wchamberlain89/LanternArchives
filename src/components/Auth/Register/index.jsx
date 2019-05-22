import React from 'react';
import {connect} from 'react-redux';
import { signUp } from './../../../actions';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields : {
        email: '',
        password: '',
        password2: ''
      },
      formErrors : {}
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRegister(event) {
    event.preventDefault();
    if(this.validateForm()) {
      this.props.signUp(this.state.fields);
    }
  }

  handleChange(e) {
    let fields = Object.assign({}, this.state.fields);
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    console.log(fields);
  }

  validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter your email.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter valid email.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      // if (typeof fields["password"] !== "undefined") {
      //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      //     formIsValid = false;
      //     errors["password"] = "*Please enter secure and strong password.";
      //   }
      // }

      if (fields['password'] !== fields['password2']) {
        formIsValid = false;
        errors['password2'] = "*Please make sure passwords match.";
      }

      this.setState({
        formErrors: errors
      });
      return formIsValid;
    }

  render() {
    return (
      <form>
        <input type="email" placeholder="Email" name="email" onChange={this.handleChange}/>
        <div className="errorMsg">{this.state.formErrors.email}</div>
        <input type="text" placeholder="Password" name="password" onChange={this.handleChange}/>
        <div className="errorMsg">{this.state.formErrors.password}</div>
        <input type="text" placeholder="Verify your password" name="password2" onChange={this.handleChange}/>
        <div className="errorMsg">{this.state.formErrors.password2}</div>
        <button
          onClick={this.handleRegister}
          type="submit">Register</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  };
};

export default connect(null, mapDispatchToProps)(Register);

import React from 'react';
import {connect} from 'react-redux';
import { signUp } from './../../../actions';
import user from './../../../assets/user.png';
import password from './../../../assets/password.png';

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

    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = '*Please enter your email.';
    }

    if (typeof fields['email'] !== 'undefined') {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields['email'])) {
        formIsValid = false;
        errors['email'] = '*Please enter valid email.';
      }
    }

    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = '*Please enter your password.';
    }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    if (fields['password'] !== fields['password2']) {
      formIsValid = false;
      errors['password2'] = '*Please make sure passwords match.';
    }

    this.setState({
      formErrors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div className='registerContainer'>
        <h3>Register a new account.</h3>
        <form>

          <div className="errorMsg">{this.state.formErrors.email}</div>
          <div className='inputContainer'>
            <div className='imgContainer'>
              <img src={user} style={{paddingTop: '2px'}} alt=""/>
            </div>
            <input type="text" placeholder="Email"    name="email"    onChange={this.handleChange}/>
          </div>


          <div className="errorMsg">{this.state.formErrors.password}</div>
          <div className='inputContainer'>
            <div className='imgContainer'>
              <img src={password} alt=""/>
            </div>
            <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
          </div>


          <div className="errorMsg">{this.state.formErrors.password2}</div>
          <div className='inputContainer'>
            <div className='imgContainer'>
              <img src={password} alt=""/>
            </div>
            <input type="password" placeholder="Verify Password" name="password2" onChange={this.handleChange}/>
          </div>


          <button
            onClick={this.handleRegister}
            type="submit">Register
          </button>
        </form>
        <h3>Already have an account? <span onClick={this.props.toggleForm}>Sign in here!</span> </h3>
        <style jsx>{`
          h3 {
            color: white;
            font-size: 14px;
            font-family: "slabo 27px";
            text-align: center;
            margin-bottom: 20px;
          }
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          input {
            width: 100%;
            background-color: transparent;
            border: none;
            padding-left: 10px;
            color: white;
          }
          img {
            width: 30px;
            height: 100%;
          }
          span {
            color: blue;
            text-decoration: underline;
          }
          span:hover {
            cursor: pointer;
          }
          button {
            height: 30px;
            width: 100%;
            max-width: 300px;
            background-color: transparent;
            color: white;
            border: 1px solid white;
            border-radius: 2px;
            margin-bottom: 10px;
          }
          button:hover {
            background-color: white;
            color: black;
            cursor: pointer;
          }
          .inputContainer {
            height: 30px;
            width: 100%;
            max-width: 300px;
            border: 1px solid white;
            box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.0025);
            border-radius: 2px;
            display: flex;
            margin-bottom: 10px;
          }
          .imgContainer {
            background-color: white;
            width: 30px;
            height: 100%;
          }
          .registerContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
          }
          .errorMsg {
            color: red;
          }
          `}</style>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  };
};

export default connect(null, mapDispatchToProps)(Register);

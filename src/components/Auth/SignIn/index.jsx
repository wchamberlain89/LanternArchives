import React from 'react';
import {connect} from 'react-redux';
import { signIn } from './../../../actions';
import { compose } from 'react-redux';
import user from './../../../assets/user.png';
import password from './../../../assets/password.png';
import {Link} from 'react-router-dom';

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
  }

  handleChange(e) {
    let state = Object.assign({}, this.state);
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    console.log(this.props);
    return (
      <div className='signInContainer'>
        <h3>Sign in to your account</h3>
        <form>
          <div className='inputContainer'>
            <div className='imgContainer'>
              <img src={user} style={{paddingTop: '2px'}} alt=""/>
            </div>
            <input type="text" placeholder="Email"    name="email"    onChange={this.handleChange}/>
          </div>
          <div className='inputContainer'>
            <div className='imgContainer'>
              <img src={password} alt=""/>
            </div>
            <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/>
          </div>
          <button
            onClick={this.handleSignIn} type="submit">
            Login
          </button>
        </form>
        <h3>Don't have an account? <span onClick={this.props.toggleForm}>Register here!</span></h3>
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
          .signInContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
          }
        `}</style>
      </div>
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

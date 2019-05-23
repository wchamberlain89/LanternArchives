import React from 'react';
import {connect} from 'react-redux';
import {createSettlement} from './../../actions';

class NewSettlementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : ""
    }
    this.handleAddingSettlement = this.handleAddingSettlement.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddingSettlement(event) {
    event.preventDefault();
    this.props.createSettlement(this.props.auth.uid, this.state.title);
    this.props.props.history.push('/');
  }

  handleChange(e) {
    let state = Object.assign({}, this.state);
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {

  console.log(this.props);

  return(
    <div>
      <form>
        <input type="text" name="title" onChange={this.handleChange} placeholder="Enter a name for your settlement."/>
        <button type="submit" onClick={this.handleAddingSettlement}>Add Settlement</button>
      </form>
      <style jsx>{`
        input {
          width: 100%;
          background-color: transparent;
          border: 1px solid white;
          padding: 20px;
          color: white;
          margin-bottom: 20px;
          font-size: 18px;
        }
        button{
          width: 100%;
          max-width: 275px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid white;
          border-radius: 100px;
          color: white;
          font-family: "slabo 13px";
          font-size: 18px;
          margin:0 auto;
        }
        button:hover {
          background-color: white;
          color: black;
          cursor: pointer;
        }
        `}</style>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSettlement: (userId, title) => dispatch(createSettlement(userId, title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewSettlementForm);

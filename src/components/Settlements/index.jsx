import React from 'react';
import Landing from './../Landing';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';
import {createSettlement} from './../../actions';

function Settlements(props) {
  console.log(props.settlements)
  function handleClick() {
    props.createSettlement(props.auth.uid)
  }
  return(
    <div>
      Settlements container
      <Landing/>
      <button onClick={handleClick}>Create Settlement</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settlements: state.firebase.data.settlements,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createSettlement: (userId) => dispatch(createSettlement(userId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect((props) => [
    { path: 'settlements', queryParams: ['orderByChild=user', `equalTo=${props.auth.uid}`] }
  ])
)(Settlements)

import React from 'react';
import {connect} from 'react-redux';

function Test(props){
  console.log(props.auth);
  return(
    <div>test : {props.auth.email || 'No good'}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Test);

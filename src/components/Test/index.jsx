import React from 'react';
import {connect} from 'react-redux';

function Test(props){
  return(
    <div>test : {props.auth.uid || "No good"}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Test);

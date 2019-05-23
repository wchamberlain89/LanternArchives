import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Route, Switch} from 'react-router-dom';

import SettlementsList from './../SettlementsList';
import SettlementDashboard from './../settlementDashboard';
function Dashboard(props) {
  if (!props.auth.uid) {
    return (
      <Redirect to="/signIn" />
    )
  }

  return (
    <SettlementsList/>
  )
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard);

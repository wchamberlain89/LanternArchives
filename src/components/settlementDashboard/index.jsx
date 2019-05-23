import React from 'react';
import {connect} from 'react-redux';
import {firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Link, Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import SurvivorsMain from './SurvivorsMain';
import ResourcesMain from './ResourcesMain';
import SettlementLinks from './SettlementLinks';
import lanternLogo from './../../assets/lanternLogo.png';

function settlementDashboard(props) {
  return(
    <div>
      <div>
        displaying settlement dashboard for {props.match.params.id}
      </div>
      <Switch>
        <Route path='/settlements/:id/resources' component={ResourcesMain} />
        <Route path='/settlements/:id/survivors' component={SurvivorsMain} />
        <Route path='/settlements/:id' render={(props) => <SettlementLinks settlementId={props.match.params.id}/> } />
      </Switch>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const settlements = state.firebase.data.settlements;
  const settlement = settlements ? settlements[id] : null
  return {
    settlement: settlement,
    auth: state.firebase.auth
  }
}

export default withRouter(compose(
  connect(mapStateToProps),
  firebaseConnect((props) => [
    {path: 'settlements'}
  ])
)(settlementDashboard))

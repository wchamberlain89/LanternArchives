import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {withRouter} from 'react-router';
import Landing from './Landing/index';
import AuthController from './Auth/AuthController';
import Error404 from './Error404';
import {firebaseConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import Dashboard from './Dashboard';
import SettlementDashboard from './settlementDashboard';


function App() {


    return (
      <div>
        <Switch>
          <Route path='/settlements/:id' component={SettlementDashboard}/>
          <Route path="/signIn" component={AuthController}/>
          <Route path="/" component={Dashboard} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );

}

export default App;

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {withRouter} from 'react-router';
import Landing from './Landing/index';
import AuthController from './Auth/AuthController';
import Error404 from './Error404';
import {firebaseConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import SettlementDashboard from './settlementDashboard';


function App() {
  return (
    <div style={{backgroundColor: 'red', minHeight: '100vh', background: 'linear-gradient(180deg, #000000 0%, #0A0909 39.06%, #4E0000 100%)'}}>
      <div className="main-container">
        <Landing/>
        <Switch>
          <Route path='/settlements/:id' component={SettlementDashboard}/>
          <Route path="/signIn" component={AuthController}/>
          <Route path="/" component={Dashboard} />
          <Route component={Error404}/>
        </Switch>
        <style jsx global>{`
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
              font-weight: normal;
            }
          `}</style>
        <style jsx>{`
            .main-container {
              margin: 0 auto;
              width: 90%;
              max-width: 400px;
            }
          `}</style>
      </div>
    </div>
  );

}

export default App;

import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Route, Switch} from 'react-router-dom';

import SettlementsList from './../SettlementsList';
import SettlementDashboard from './../settlementDashboard';
import lanternLogo from './../../assets/lanternLogo.png';
import NewSettlementForm from './../NewSettlementForm';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addFormShowing : 'false'
    };
    this.toggleAddForm = this.toggleAddForm.bind(this);
  }

  toggleAddForm() {
    const state = Object.assign({}, this.state);
    state.addFormShowing = !this.state.addFormShowing;
    this.setState(state);
  }

  render() {
    if (!this.props.auth.uid) {
      return (
        <Redirect to="/signIn" />
      );
    }

    return (
      <div>
        <div className="header">
          <img src={lanternLogo}/>
          <h2>Settlements</h2>
        </div>
        <Switch>
          <Route path='/addSettlement' render={ (props) => <NewSettlementForm props={this.props}/> } />
          <Route path='/'         render={ (props) => <SettlementsList/> }   />
        </Switch>
        <style jsx>{`
        .header {
          border-bottom: 2px solid white;
          padding: 15px ;
          text-align: center;
          margin-bottom: 15px;
        }
        img {
          width: 75px;
          text-align: center;
        }
        h2{
          font-family: Slabo 27px;
          font-size: 24px;
          text-align: center;

          color: #FFFFFF;

          /* Header-Glow */

          text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.75);
        }

      `}</style>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  };
};

export default connect(mapStateToProps)(Dashboard);

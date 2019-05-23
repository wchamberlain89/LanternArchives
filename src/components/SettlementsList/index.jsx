import React from 'react';
import Landing from './../Landing';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';
import {createSettlement} from './../../actions';
import {Link} from 'react-router-dom';
import Test from './../Test';



function SettlementsList(props) {
  const {settlements} = props;



  function handleClick() {

  }
  return(
    <div>
      <Link to={'/addSettlement'}><div onClick={props.toggleForm} className="newSettlement">
        <span>Create a new settlement</span>
      </div></Link>
      { settlements && Object.keys(settlements).map(settlementId => {
        const currentSettlement = settlements[settlementId];
        return (
          <Link to={'/settlements/' + settlementId} key={settlementId}>
            <div>{currentSettlement.name}</div>
          </Link>
        )
        })}
      <style jsx>{`
        .newSettlement{
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
        .newSettlement:hover {
          background-color: white;
          color: black;
          cursor: pointer;
        }
        `}</style>
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
)(SettlementsList)

import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firebaseConnect, isLoaded} from 'react-redux-firebase';
import Resource from './../Resource';

function ResourcesList(props) {
  const {resources} = props;

  return(
    <div>
      {resources && Object.keys(resources).map((resourceId, index) =>{
        return <Resource
          resource={resources[resourceId]}
          resourceId={resourceId}
          settlementId={props.settlementId}
          key={index}/>;
      })}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const resources = state.firebase.data.settlements ? state.firebase.data.settlements[ownProps.settlementId].resources : null;
  return {
    resources : resources
  };
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect((props) =>
    [
      {path: 'settlements'}
    ]
  ))(ResourcesList);

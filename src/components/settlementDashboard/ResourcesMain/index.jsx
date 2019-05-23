import React from 'react';
import ResourcesList from './ResourcesList';
import {withRouter} from 'react-router';

function ResourcesMain(props) {
  return(
    <div>
      <div>Reached Resources Main</div>
      <ResourcesList settlementId={props.match.params.id}/>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
}

export default withRouter(ResourcesMain);

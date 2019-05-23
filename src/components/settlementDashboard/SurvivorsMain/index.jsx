import React from 'react';

function SurvivorsMain(props) {
  return(
    <div>
      <div>Reached Survivors Main Display</div>
      <button onClick={props.history.goBack}>Back</button>
    </div>
  );
}

export default SurvivorsMain;

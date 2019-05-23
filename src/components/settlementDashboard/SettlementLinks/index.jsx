import React from 'react';
import {Link} from 'react-router-dom';

function SettlementLinks(props) {
  return(
    <div>
      <Link to={`/settlements/${props.settlementId}/resources`}>resources</Link>
      <Link to={`/settlements/${props.settlementId}/survivors`}>Survivors</Link>
    </div>
  );
}

export default SettlementLinks;

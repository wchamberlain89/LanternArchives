import React from 'react';
import {connect} from 'react-redux';
import {updateQty} from './../../../../actions'

function Resource(props) {
  const {resource} = props;

  function handleClick() {
    props.updateQty('bone', 16, props.settlementId);
  }

  return(
    <div>
      <div>{resource.name} : {resource.qty}</div>
      <button onClick={handleClick}>Add More QTY!</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateQty: (item, qty, settlementId) => dispatch(updateQty(item, qty, settlementId))
  }
}

export default connect(null,mapDispatchToProps)(Resource);

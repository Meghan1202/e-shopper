/* eslint-disable react/prop-types */
// import PropTypes from 'prop-types';
import React from 'react';

const Quantity = ({ quantity, onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onDecrement}>-</button>
    <p>
      {`${quantity} quantities`}
    </p>
    <button type="button" onClick={onIncrement}> + </button>
  </div>
);

export default Quantity;

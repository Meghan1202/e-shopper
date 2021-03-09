import React from 'react';
import './Quantity.scss';
import PropTypes from 'prop-types';

const Quantity = ({ count, onIncrement, onDecrement }) => (
  <div className="quantity__count">
    <button type="button" onClick={onDecrement}>-</button>
    <p>
      {`${count} in Basket`}
    </p>
    <button type="button" onClick={onIncrement}> + </button>
  </div>
);

Quantity.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Quantity;

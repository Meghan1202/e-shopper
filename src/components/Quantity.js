import PropTypes from 'prop-types';
import React from 'react';

const Quantity = ({ count }) => (
  <div>
    <button type="button" onClick={() => { }}> - </button>
    <p>
      {`${count} quantities`}
    </p>
    <button type="button"> + </button>
  </div>
);

Quantity.propTypes = {
  count: PropTypes.string.isRequired,
};

export default Quantity;

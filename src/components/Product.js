import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import Quantity from './Quantity';

const Product = ({
  productName, productPrice, productId, productQuantity,
}) => (
  <div className="card">
    <img id="banana__img" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" alt="Banana" />
    <div className="container">
      <h4>
        { productId}
        <b>{productName}</b>
      </h4>
      <p>
        One kg for
        {productPrice}
      </p>
      <div className="inner__card">
        <p>
          Quantity:
          { productQuantity}
        </p>
        <Quantity count={20} />
      </div>
    </div>
  </div>
);

Product.propTypes = {
  productPrice: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productQuantity: PropTypes.string.isRequired,
};

export default Product;

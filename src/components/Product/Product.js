import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import Quantity from '../Quantity/Quantity';
import SoldOut from '../SoldOut/SoldOut';

const Product = ({
  productName, productPrice, productQuantity, onIncrement, onDecrement, count, companyName, imgSrc,
}) => (
  <div data-testid="product-card" className="card">
    <img data-testid="product-image" id="banana__img" src={imgSrc} alt="Banana" />
    <div className="container">
      <h4>
        {companyName}
      </h4>
      <p><b>{productName}</b></p>
      <p>
        In Stock:
        { productQuantity}
      </p>
      <div className="inner__card">
        <p>
          {productPrice}
          /-
        </p>
        {productQuantity > 0
          ? <Quantity count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
          : <SoldOut />}
      </div>
    </div>
  </div>
);

Product.propTypes = {
  productPrice: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productQuantity: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Product;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const totalValue = cartItems.reduce(
    (cartTotal, currentItem) => cartTotal + currentItem.count * currentItem.price, 0,
  );
  return (
    <>
      <table className="Cart__table">
        <thead>
          <tr>
            <th>Item Description</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fruits and Vegitables</td>
          </tr>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>{cartItem.id}</td>
              <td>{cartItem.productName}</td>
              <td>{cartItem.count}</td>
              <td>{cartItem.count * cartItem.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="Total__Value">
        <h3>
          TOTAL
          {' '}
          {totalValue}
        </h3>
        <hr />
        <div className="Total__Value__container">
          {totalValue > 0
            ? (
              <Link to="/Checkout">
                {' '}
                <button type="button" id="Checkout__button">CheckOut</button>
              </Link>
            ) : alert('No item in the My Basket')}
        </div>
      </div>
    </>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cart;

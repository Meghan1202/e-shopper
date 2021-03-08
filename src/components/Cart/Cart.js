import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartTable from '../CartTable/CartTable';
import '../CartTable/CartTable.css';

const Cart = ({ cartItems }) => {
  const totalValue = cartItems.reduce(
    (cartTotal, currentItem) => cartTotal + currentItem.count * currentItem.price, 0,
  );
  return (
    <>
      <div className="Cart__Body">
        <div className="Cart__Container">
          <CartTable cartItems={cartItems} />
        </div>
        <div className="Checkout__And__Continue__Container">
          <Link to="/">
            <button type="button" className="Shop__button">Continue Shopping</button>
          </Link>

          <div className="Total__Value">
            <div className="Value__Container">
              <h3>
                TOTAL
                {' '}
              </h3>
              <h3>
                Rs.
                {' '}
                {totalValue}
              </h3>
            </div>
            <hr />
            <div className="Total__Value__container">
              <Link to="/checkout">
                {' '}
                <button type="button" className="Checkout__button">CheckOut</button>
              </Link>
            </div>
          </div>
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

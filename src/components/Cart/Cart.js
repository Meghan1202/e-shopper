import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartTable from '../CartTable/CartTable';
import '../CartTable/CartTable.css';

const Cart = ({ cartItems }) => {
  const totalValue = [].concat(...Object.values(cartItems))
    .reduce((amount, item) => amount + (item.price * item.count), 0);
  return (
    <>
      <div className="Cart__Body" data-testid="Cart">
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
  cartItems: PropTypes.objectOf(Array).isRequired,
};

export default Cart;

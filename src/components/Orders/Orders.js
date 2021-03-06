import React from 'react';
import PropTypes from 'prop-types';
import CartTable from '../CartTable/CartTable';
import '../CartTable/CartTable.css';
import './Orders.css';

function Order({ noOfItems, cartItems }) {
  return (
    <div>
      <p className="all-orders">All Orders</p>
      <hr />
      <p className="past-orders">Past Orders(10)</p>
      <div className="order-table-container">
        <table className="order-table">
          <tr>
            <th>Order</th>
            <th>Item</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
          <tr className="order-details">
            <td>order id: 12</td>
            <td>{noOfItems}</td>
            <td>Sun 04 March 2018 10:01 pm</td>
            <td>883.00</td>
          </tr>
        </table>
        <CartTable cartItems={cartItems} />
      </div>
    </div>
  );
}

Order.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
  noOfItems: PropTypes.number.isRequired,
};

export default Order;

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
      <p className="past-orders">
        Past Orders(
        {noOfItems}
        )
      </p>
      {}
      <div className="order-table-container">
        {cartItems.map((order) => (
          <>
            <table className="order-table">
              <tr>
                <th>Order</th>
                <th>Item</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
              <tr className="order-details">
                <td>
                  order id:
                  {' '}
                  {order.id}
                </td>
                <td>{noOfItems}</td>
                <td>{order.date}</td>
                <td>{order.price}</td>
              </tr>
            </table>
            <CartTable cartItems={order} />
          </>
        ))}

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

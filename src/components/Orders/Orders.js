import React from 'react';
import PropTypes from 'prop-types';
import CartTable from '../CartTable/CartTable';
import '../CartTable/CartTable.css';
import './Orders.css';

const Order = ({ noOfItems, cartItems }) => {
  const getItemsInOrder = (order) => {
    const result = [].concat(...Object.keys(order).filter((key) => {
      if (key === 'id' || key === 'date') {
        return false;
      }
      return true;
    })).reduce(({ itemCount, amount }, key) => order[key].reduce(
      ({ itemCount: keyItemCount, amount: keyAmount }, item) => ({
        itemCount: keyItemCount + item.count,
        amount: keyAmount + (item.price * item.count),
      }
      ), { itemCount, amount },
    ), { itemCount: 0, amount: 0 });
    return result;
  };

  return (
    <div data-testid="All-Order">
      <p className="all-orders">All Orders</p>
      <hr />
      <p className="past-orders">
        Past Orders(
        {noOfItems}
        )
      </p>
      <div className="order-table-container">
        {cartItems.map((order) => (
          <React.Fragment key={order.id}>
            <table className="order-table">
              <tbody>
                <tr key={order.id}>
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
                  <td>{getItemsInOrder(order).itemCount}</td>
                  <td>{new Date(order.date).toDateString()}</td>
                  <td>{getItemsInOrder(order).amount}</td>
                </tr>
              </tbody>
            </table>
            <CartTable cartItems={order} />
          </React.Fragment>
        ))}

      </div>
    </div>
  );
};

Order.propTypes = {
  cartItems: PropTypes.arrayOf(Object).isRequired,
  noOfItems: PropTypes.number.isRequired,
};

export default Order;

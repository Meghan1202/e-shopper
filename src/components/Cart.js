/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ cartItems }) => {
  const totalValue = cartItems.reduce(
    (cartTotal, currentItem) => cartTotal + currentItem.count * currentItem.price, 0,
  );
  return (
    <>
      <table className="c">
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
          <tr>
            <td>
              {totalValue}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;

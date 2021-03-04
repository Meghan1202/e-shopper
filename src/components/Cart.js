/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({ cartItems }) => (
  <>
    <table className="c">
      <tr>
        <th>Item Description</th>
        <th>Unit Price</th>
        <th>Quantity</th>
        <th>Sub Total</th>
      </tr>
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

    </table>
  </>
);

export default Cart;

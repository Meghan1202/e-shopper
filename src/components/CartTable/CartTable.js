/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './CartTable.css';

const CartTable = ({ cartItems }) => (
  <>
    <div className="Cart__Table__Container">
      <table className="Cart__Table">
        <thead>
          <tr>
            <th className="Item__Header">Item Description</th>
            <th className="Item__Header">Unit Price</th>
            <th className="Item__Header">Quantity</th>
            <th className="Item__Header">Sub Total</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(cartItems).filter((key) => {
            if (key.includes('id') || key.includes('date')) {
              return false;
            }
            return true;
          }).map((category) => (
            <>
              <tr>
                <td className="Row__Header" colSpan="4">{category}</td>
              </tr>
              {cartItems[category].map((item) => (
                <>
                  <tr key={item.id} />
                  <td className="Item__Row">
                    <span className="Brand__Name">{item.companyName}</span>
                    <br />
                    {item.name}
                  </td>
                  <td className="Item__Row">{item.price}</td>
                  <td className="Item__Row">{item.count}</td>
                  <td className="Item__Row">{item.count * item.price}</td>
                </>
              ))}
            </>
          ),
          // {cartItems.map((cartItem) => (
          //   <tr key={cartItem.id}>
            // <td className="Item__Row">
            //   <span className="Brand__Name">{cartItem.companyName}</span>
            //   <br />
            //   {cartItem.productName}
            // </td>
            // <td className="Item__Row">{cartItem.price}</td>
            // <td className="Item__Row">{cartItem.count}</td>
            // <td className="Item__Row">{cartItem.count * cartItem.price}</td>
          //   </tr>
          //   )
          // ) }
          )}
        </tbody>
      </table>
    </div>
  </>
);

CartTable.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    companyName: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })).isRequired,
};

export default CartTable;

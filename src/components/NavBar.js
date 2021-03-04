import React from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ items }) => (
  <div className="topnav">
    <a href="#home" className="app__logo">E-Shopper</a>
    <div>
      <a href="#allOrders">All Orders</a>
      <a className="active" href="#myBasket">
        <img id="basket__image" src="https://img.freepik.com/free-vector/empty-wicker-basket-flowers-large-birds-nest-eggs_135176-431.jpg?size=626&ext=jpg" alt="Basket" />
        My Basket
        <span>
          { items}
        </span>
      </a>
    </div>
  </div>
);

NavBar.propTypes = {
  items: PropTypes.number.isRequired,
};

export default NavBar;

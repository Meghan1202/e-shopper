import React from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ items }) => (
  <div className="topnav">
    <a href="#home" className="app__logo">E-Shopper</a>
    <a className="active" href="#myBasket">
      <image id="basket__image" src="https://img.freepik.com/free-vector/empty-wicker-basket-flowers-large-birds-nest-eggs_135176-431.jpg?size=626&ext=jpg" alt="Basket Image" />
      My Basket
      <p>
        { items}
      </p>
    </a>
    <a href="#allOrders">All Orders</a>
  </div>
);

NavBar.propTypes = {
  items: PropTypes.string.isRequired,
};

export default NavBar;

import React from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ items }) => (
  <div className="topnav">
    <a href="#home" className="app__logo">E-Shopper</a>
    <div>
      <Link to="/">All Orders</Link>
      <Link className="active" to="/Cart">
        <img id="basket__image" src="https://img.freepik.com/free-vector/empty-wicker-basket-flowers-large-birds-nest-eggs_135176-431.jpg?size=626&ext=jpg" alt="Basket" />
        My Basket
        <span>
          { items}
        </span>
      </Link>
    </div>
  </div>
);

NavBar.propTypes = {
  items: PropTypes.number.isRequired,
};

export default NavBar;

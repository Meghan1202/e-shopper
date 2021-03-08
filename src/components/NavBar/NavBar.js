import React, { useContext } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThemeContext from '../../ThemeContext';

const NavBar = ({ items }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className="topnav" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <Link className="app__logo" to="/">E-Shopper</Link>
      <div>
        <Link to="/allOrder">All Orders</Link>
        {items > 0
          ? (
            <Link className="active" to="/cart">
              <img id="basket__image" src="https://img.freepik.com/free-vector/empty-wicker-basket-flowers-large-birds-nest-eggs_135176-431.jpg?size=626&ext=jpg" alt="Basket" />
              My Basket
              <span>
                {items}
              </span>
            </Link>
          ) : (
            <Link className="active" to="/cart">
              <img id="basket__image" src="https://img.freepik.com/free-vector/empty-wicker-basket-flowers-large-birds-nest-eggs_135176-431.jpg?size=626&ext=jpg" alt="Basket" />
              My Basket
              <span>
                {items}
              </span>
            </Link>
          )}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  items: PropTypes.number.isRequired,
};

export default NavBar;
